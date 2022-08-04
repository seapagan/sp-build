# SPBuild - Webpack build system for simple development <!-- omit in toc -->

This is a setup for plain HTML/CSS/JS coding, when using a Library or Framework
is too much. It gives a real-time update in development mode and optimized,
minimized code for production. JS/TS, CSS/SCSS/SASS ready.

- [How to get](#how-to-get)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Specific Notes](#specific-notes)
    - [Stylesheet files](#stylesheet-files)
    - [Typescript](#typescript)
    - [Favicon](#favicon)
    - [Source Maps](#source-maps)
    - [HTML Validation](#html-validation)
  - [Production](#production)
- [Implemented functionality](#implemented-functionality)
- [Planned functionality](#planned-functionality)
- [Bugs](#bugs)

Currently a work in progress, I still have several additions. Works fine for
HTML/CSS/JS projects though.

## How to get

- Clone the repo from GitHub. Remember to remove the `.git` directory inside and
reinitialize with `git --init`.
- Download the latest public release [here](https://github.com/seapagan/sp-build/releases/latest)
- Download the latest tarball from the main branch
  [here](https://github.com/seapagan/sp-build/archive/main.tar.gz). This may
  contain breaking code.
- Use [Degit](https://github.com/Rich-Harris/degit) to get a clean clone of the
  repo you can use straight away:

  ```bash
  npx degit https://github.com/seapagan/sp-build <folder to put it>
  ```

The last 3 options do not contain the `.git` directory so you can then go ahead
and initialize as usual with `git --init`

## How to use

Before working, install the development dependencies using `npm install` or
`yarn install` from the project root.

### Development

Open a terminal in the downloaded code and run:

```bash
npm run dev
```

or if you prefer `Yarn` then:

```bash
yarn dev
```

This creates a development server running on the default port of `8080` which
you can then open in a browser at <http://localhost:8080>. This will
automatically update when you make any changes to the HTML, CSS or JS files.

Remove the current placeholder HTML/CSS/JS and start coding!!

> Running `npm run build` or `yarn build` will create an un-minified version of
> the produced code for info and checking.

### Specific Notes

The following notes are of interest.

#### Stylesheet files

your CSS files need to be imported in the JS file instead of the HTML. In a
production bundle, these will be combined and extracted then minified. Import
them at the top of your JS file, for example:

```javascript
import "./styles/site.css";
```

You can also use `SASS` or `SCSS` instead of plain CSS, simply by renaming the
file extensions

#### Typescript

By default the build system uses plain JavaScript. if you prefer to use
TypeScript, simply rename the `index.js` to `index.ts`, stop and restart the dev
server then code as normal.
TypeScript and supporting libraries are already installed.

#### Favicon

If you put a `favicon.ico` file in the [src](src) directory, it will
automatically be added to the `dist` folder and the HTML. You will need to stop
and restart the dev server after adding the favicon, if it is running.

#### Source Maps

By default we generate inline source maps for Development mode and high-quality
external source map files for Production. These `*.map` files can be deleted if
you want, but will only be loaded if the Browser Dev Tools are open so won't
cause any slowdown in Production. They are very useful for error reports from
live sites, and the lack of them does not really make your code more secure.
**If you are storing secrets or API keys in front-end JavaScript then they are
insecure regardless!!**

#### HTML Validation

This is run automantically on HTML files, and will fail the build or dev-server
if there are any errors. However, due to constraints with the plugin used, this
needs html-validate installed globally to work, even though it's part of the
build system development dependencies.

`npm i -g html-validate` or `yarn add html-validate -D`

### Production

Once your code is ready to go live, you can create an optimized and minimized
version. To do this run:

```bash
npm run prod
```

or for `Yarn`:

```bash
yarn prod
```

This (if you have no errors) will create / overwrite the `dist` directory with
your new index.html and minimized CSS, JS plus the respective `.map` files. This
folder can be served from any standard web server or GH-Pages / Netlify etc.

## Implemented functionality

- Development server that hot-reloads on all code changes
- Create a standalone production build that can run in a browser.
- Babel for Javascript files to transpile to backwards-compatible code.
- JS and CSS are compressed and named with a Hash for each code change. The
  HTML file is automatically updated with these.
- ESLint(JS), StyleLint(CSS) and HTML-Validate (HTML) are run automatically.
- SCSS and SASS automatically detected and compiled on the fly.
- Typescript is integrated. You can use either TS or JS as required.
- Adds favicon automatically if exists in the `src` folder.
- Separate Sourcemap files are generated for Production.

## Planned functionality

- Add PostCSS integration
- Integrate `favicons-webpack-plugin` to auto generate favicons for different
  devices

## Bugs

- ESLint does not understand Typescript in (at least) VSCode and gives errors.
  This does not stop compilation though.
