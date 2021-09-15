import { Routes, UrlSegment } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const APP_ROUTES: Routes = [
  // add your hardocded paths first and let builder hndle the rest in NotFoundComponent
  // { path: 'info', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  {     matcher: (url) => {
    if (url.length === 2) {
      return {
        consumed: url,
        posParams: {
          city: new UrlSegment(url[0].path.substr(0), {})
        }
      };
    }
    return null;
  }, component: NotFoundComponent},
  { path: '**', component: NotFoundComponent },
];
