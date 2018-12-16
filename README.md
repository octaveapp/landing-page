# Octave App - Landing page

This landing page has been build with [Gatsby](gatsbyjs.org)

The default readme is available [here](./GATSBY_README.md)

# Getting Started

To develop localy, please ensure you have the pre-requis :

- NodeJS v10 installed. You can use [nvm](https://github.com/creationix/nvm) to install it easily
- A code editor, [Visual Studio Code](https://code.visualstudio.com/) works like a charm

From the root dir of the project, tap in in a terminal :

```
npm install
```

It will install all project dependencies, then :

```
npm run develop
```

The local server will start, and the Octave landing page should be available on <http://localhost:8000>
While this command runs, each file modification will be automaticaly take in count, and will appear in the browser without reload.

## More commands

To deploy the app in production, just tap in a terminal :

```
npm run deploy
```

To format files with Prettier :

```
npm run format
```

# What's inside?

```
./
├── ...
├── nodes_modules.js
├── public
├── gatsby-config.js                    
├── package-lock.json
├── package.json
└── src
    ├── components
    │   ├── commons
    │   │   ├── styles
    │   ├── footer
    │   ├── header
    │   ├── index
    │   │   ├── first-part
    │   │   ├── second-part
    │   │   └── third-part
    │   ├── layout.js
    │   ├── signup
    │   └── team
    ├── fonts
    ├── images
    ├── pages
    └── statics
```

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/public`**: This directory where your project is built

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail). 

6.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
  
7.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

9.  **`/src/components`**: This directory will React component used in the pages

10.  **`/src/components/commons`**: All components used into many pages

11.  **`/src/components/commons/styles`**: General stylesheet

12.  **`/src/components/footer`**: Contains footer components

13.  **`/src/components/header`**: Contains header components

14.  **`/src/components/index`**: Contains all components used in the home page

15.  **`/src/components/layout.js`**: Is the layout component used in each page

16.  **`/src/components/signup`**: Contains all components used in the signup page

17.  **`/src/components/team`**: Contains all components used in the team page

17.  **`/src/fonts`**: Contains web font. In our case, it's a generated from svg font. A font it's a more convient way to handle svg a manipulate them. For exemle, it's more easy to change the font's color than a svg image's color.

18.  **`/src/images`**: Contains all images used in the site

19.  **`/src/pages`**: Each file in the directory represents a real page in the site. Gatsby will take the file name as path for the site. For instance, `signup.js` in the folder will produre a page `http://octaveapp.fr/signup`. Each file contains the root React component of the page.

20.  **`/src/statics`**: Static files copied in the root of the site each time we deploy.