# Webpack build system for simple development <!-- omit in toc -->

[![Tests](https://github.com/seapagan/sp-build/actions/workflows/node.js.yml/badge.svg)](https://github.com/seapagan/sp-build/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/seapagan/sp-build/actions/workflows/codeql.yml/badge.svg)](https://github.com/seapagan/sp-build/actions/workflows/codeql.yml)
[![Dependency
Review](https://github.com/seapagan/sp-build/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/seapagan/sp-build/actions/workflows/dependency-review.yml)

This is a setup for plain HTML/CSS/JS coding, when using a Library or Framework
is too much. It gives a real-time update in development mode and optimized,
minimized code for production. JS/TS, CSS/SCSS/SASS ready.

- [How to get](#how-to-get)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Specific Notes](#specific-notes)
    - [Stylesheet files](#stylesheet-files)
      - [CSS Modules](#css-modules)
      - [Vendor Prefixes](#vendor-prefixes)
    - [Typescript](#typescript)
    - [Environment Variables](#environment-variables)
    - [Favicon](#favicon)
    - [Inline SVG](#inline-svg)
    - [Source Maps](#source-maps)
    - [Validation](#validation)
  - [Testing](#testing)
  - [Production](#production)
- [Implemented functionality](#implemented-functionality)
- [Planned functionality](#planned-functionality)
- [Bugs](#bugs)

Currently a work in progress, I still have several additions. Works fine for
HTML/CSS/JS projects though.

## How to get

- **Easiest Way**: Goto the repository page for this project in GitHub and press
  the `Use this Template` button. This will create a new repository in your own
  account with a clean Git history. Clone this to your local development
  machine and start working. You could even fire up a GitHub codespace and start
  working straight away!

Other options are:

- Clone the repo from GitHub. Remember to remove the `.git` directory inside and
reinitialize with `git --init`.
- Download the latest public release
  [here](https://github.com/seapagan/sp-build/releases/latest)
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

Your CSS files need to be imported in the JS file instead of the HTML. In a
production bundle, these will be combined and extracted then minified. Import
them at the top of your JS file, for example:

```javascript
import "./styles/site.css";
```

You can also use `SASS` or `SCSS` instead of plain CSS, simply by renaming the
file extensions

##### CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) are enabled for
CSS/SCSS and SASS. They should have the file name format of `<NAME>.module.css`
(or SCSS etc), and are imported as above.

##### Vendor Prefixes

All generated CSS will have the specific vendor-prefixes applied to suport
compatibility with older browser versions. Applies in both standard and Module
setups.

#### Typescript

By default the build system uses plain JavaScript. if you prefer to use
TypeScript, simply rename the `index.js` to `index.ts`, stop and restart the dev
server then code as normal. TypeScript and supporting libraries are already
installed.

#### Environment Variables

If you have a `.env` file in your project root, the script will load environment
varaibles from this and make them available using `process.env.MY_VARIABLE`.
Variables are expanded if needed:

.env:

```ini
# This is a comment
MY_TEST_VARIABLE="This is a Test"
EXPANDED_VARIABLE=${MY_TEST_VARIABLE} with expansion.
```

script.js:

```javascript
console.log(process.env.MY_TEST_VARIABLE)
console.log(process.env.EXPANDED_VARIABLE)
```

output:

  ```console
  This is a Test
  This is a Test with expansion.
  ```

If you are using a hosting provider that allows you to set ENV variables in
their interface (eg Heroku, Vercel etc), the script will also pull up them - in
this case dont include the `.env` file.

NOTE: As with all systems using `dotenv`, the variables are injected into the
script at **BUILD** time, **NOT** runtime! **Do not use this for any secret or
secure variables as they will appear in the final bundle**.

#### Favicon

If you put a `favicon.ico` file in the [src](src) directory, it will
automatically be added to the `dist` folder and the HTML. You will need to stop
and restart the dev server after adding the favicon, if it is running.

#### Inline SVG

SVG files will be automatically inlined to the bundle, unless they are too large
in which case they will be loaded from disk as usual.

#### Source Maps

By default we generate inline source maps for Development mode and high-quality
external source map files for Production. These `*.map` files can be deleted if
you want, but will only be loaded if the Browser Dev Tools are open so won't
cause any slowdown in Production. They are very useful for error reports from
live sites, and the lack of them does not really make your code more secure.
**If you are storing secrets or API keys in front-end JavaScript then they are
insecure regardless!!**

#### Validation

This is run automatically on HTML files (using `html-validate`), JavaScript
files (using `ESLint`) and CSS/SCSS/SASS files using `StyleLint`, **The build
process or dev-server will fail if there are any validation errors!**.

### Testing

[Jest](https://jestjs.io/) testing is integrated to the build system. To run the
test watcher type:

```bash
npm run test
```

or

```bash
yarn test
```

There is an example test file [index.test.js](src/index.test.js) which you can
look at and replace with your own code.

**Note that at this time testing Typescript is not configured.**

In addition, [Testing Library](https://testing-library.com/) is installed and configured,
both for `dom` and `jest-dom`

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
- [Babel](https://babeljs.io/) for Javascript files to transpile to
  backwards-compatible code for older browsers.
- JS and CSS are compressed and named with a Hash for each code change. The HTML
  file is automatically updated with these.
- [CSS modules](https://github.com/css-modules/css-modules) are enabled for CSS,
  SCSS and SASS files.
- [PostCSS](https://github.com/postcss/postcss) is enabled, allowing the use of
  their many plugins. Simply install and then add them to the
  `postcss.config.js` file in the root.
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
  is included to enable the use of experimental CSS features or those currently
  with limited browser support.
- Generated CSS has vendor prefixes applied using
  [AutoPrefixer](https://www.npmjs.com/package/autoprefixer)
- [ESLint](https://eslint.org/) (JS), [StyleLint](https://stylelint.io/) (CSS)
  and [HTML-Validate](https://gitlab.com/html-validate/html-validate) (HTML) are
  run automatically.
- [SCSS or SASS](https://sass-lang.com/) is automatically detected and compiled
  on the fly.
- [Typescript](https://www.typescriptlang.org/) is integrated. You can use
  either TS or JS as required.
- Environment variables are read from a `.env` file if it exists and injected
  into the bundle.
- Adds favicon automatically if exists in the `src` folder.
- Separate Sourcemap files are generated for Production.
- Smaller SVG files will be inlined to the bundle instead of having separate
  files.

## Planned functionality

- Integrate `favicons-webpack-plugin` to auto generate favicons for different
  devices
- Look at possible integration of
  [postcss-normalize](https://github.com/csstools/postcss-normalize) since we
  now have postcss enabled.
- possibly install [postcss-nested](https://github.com/postcss/postcss-nested)
  to allow nesting like SCSS in plain CSS (it already allows nesting in CSS to
  the proposed [CSS Nesting Specification](https://drafts.csswg.org/css-nesting-1/))
  using  `postcss-present-env`

## Bugs

- ESLint does not understand Typescript in (at least) VSCode and gives editor
  warnings / errors. This does not stop compilation though.
