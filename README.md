# UI Components for React built with Tailwind CSS 3
![Kimia-UI](https://res.cloudinary.com/beloved/image/upload/v1618040187/Assets/kimia_lpqdlr.png)

## Why this approach?

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Il allows you writing your style without leaving your HTML.

The biggest disadvantage of Tailwind CSS is the risk of having too long classes that will make our code not readable enough.

As React is component-based, we can extract component logic with its classes and reuse them elsewhere which will result in more readable code with more components and fewer classes.

That's why I have created this collection of UI components fully customizable. Just copy and paste a component you want to use

All the components are in the **packages** directory.

Each component contains 2 sub-directories
* **examples** : contains examples for each variant of the component in TypeScript
  

* **snippets** : contains examples for each variant  of the component in plain React


## 📋 Add a new component
To add a new component :

Create your new directory in **src/packages/{yourComponentName}** Inside your folder, you will create 2 subfolders and one file
  
- **examples** : will contains examples for your component in TypeScript**  
- **snippets** : Will contains examples in plain React and will be used as code snippet to copy
- **{your component name}.tsx** will contains the logic of your components
    

Create your new file(route) in **src/pages/components/{your component name}**. Then you will import all the examples and snippets for your component


## Browser Support

These components are compatible with all browsers

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## Contribution
If you would like to contribute on the project, fixing bugs, improve accessibility or open an issue, please follow our [Contribution guide](https://github.com/enochndika/kimia-UI/blob/main/contributing.md)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

