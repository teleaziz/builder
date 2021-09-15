import { Component, Inject, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Builder, GetContentOptions } from '@builder.io/sdk';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router'

interface PartialResponse {
  status(code: number): this;
}

@Component({
  selector: 'app-not-found',
  template: `
    <builder-component
      (load)="onContentLoad($event)"
      (error)="onContentError($event)"
      model="page"
      [options]="contentOptions"
    ></builder-component>
    <div *ngIf="showNotFound">page not found</div>
  `,
})
export class NotFoundComponent {
  showNotFound = false;
  contentOptions: GetContentOptions = {};

  constructor(
    @Optional() @Inject(RESPONSE) private response: PartialResponse,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    const city = route.snapshot.paramMap.get('city');
    let url = router.getCurrentNavigation()?.finalUrl?.toString();
    if (city) {
      // /newyork/about-us
      // city: sf, url: /about-us
      url = url?.replace(`/${city}`, '');
      this.contentOptions = {
        url,
        userAttributes: {
          city
        } as any,
      }
    } else {
      this.contentOptions = {
        url
      }
    }

    console.log('here ', this.contentOptions, route.snapshot.paramMap);
  }

  onContentLoad(content?: any) {
    if (!content) {
      if (this.response) {
        this.response.status(404);
      }
      if (Builder.isBrowser && !Builder.isEditing && !Builder.isPreviewing) {
        this.showNotFound = true;
      }
    } else {
      const { title, description } = content.data;
      if (title) {
        this.title.setTitle(title);
        this.meta.addTag({ name: 'title', content: title });
      }
      if (description) {
        this.meta.addTag({ name: 'description', content: description });
      }
    }
  }
  onContentError(error: any) {
    console.error(error);
    if (this.response) {
      // maybe 500?
      this.response.status(404);
    }
  }
}
