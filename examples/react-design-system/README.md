## Builder.io example using a strict custom design system in React and integrating builder.io with storybook

In this example we show how to integrate react components with [Builder.io](https://builder.io) and

See the source code for the custom components used in this demo [here](src/components)

<img src="https://imgur.com/PJW3b4S.gif" alt="example" />

We also show how intergrate Builder.io using [@builder.io/storybook](https://github.com/builderio/builder/tree/master/packages/storybook) within your storybook to give your users a playground where they can drag and drop your custom components and prototype something quick.

[Storybook Demo](https://builder-storybook.firebaseapp.com/)

<img src="https://user-images.githubusercontent.com/5093430/76154244-ebbe6480-608d-11ea-9dc9-08a59eda220e.gif" alt="storybook example" />


👉**Tip: want to limit page building to only your components? Try [components only mode](https://builder.io/c/docs/guides/components-only-mode)**

### To run the example Locally

- [Sign in or create an account](https://builder.io)
- Create new page
- From the command line

```bash
git clone https://github.com/BuilderIO/builder.git
cd examples/react-design-system
npm install
```
To Run storybook
```
npm run storybook
```

To run the app
```
npm run start
```

- Now that you have the development server running on localhost, point the Builder.io entry to it by assigning the preview URL to be : `http://localhost:3000/home`

<img width="796" alt="Screen Shot 2020-02-18 at 9 48 51 AM" src="https://user-images.githubusercontent.com/5093430/74763082-f5457100-5233-11ea-870b-a1b17c7f99fe.png">

When you deploy this to a live or staging environment, you can change the preview URL for your model globally from [builder.io/models](https://builder.io/models) (see more about models [here](https://builder.io/c/docs/guides/getting-started-with-models) and preview urls [here](https://builder.io/c/docs/guides/preview-url))
