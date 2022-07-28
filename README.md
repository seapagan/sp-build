# Skeleton Webpack setup for simple development <!-- omit in toc -->

This is a setup for plain HTML/CSS/JS coding, when using a Library or Framework
is too much. It gives a real-time update in development mode and optimized,
minimized code for production.

- [How to get](#how-to-get)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [Implemented functionality](#implemented-functionality)
- [Planned functionality](#planned-functionality)

Currently a work in progress, I still have several additions. Works fine for
HTML/CSS/JS projects though.

## How to get

- Clone the repo from GitHub. Remember to remove the `.git` directory inside and
reinitialize with `git --init`.
- Download the latest public release [here](https://github.com/seapagan/webpack-skel/releases/latest)
- Download the latest tarball from the main branch
  [here](https://github.com/seapagan/webpack-skel/tarballs/main). This may
  contain breaking code.
- Use [Degit](https://github.com/Rich-Harris/degit) to get a clean clone of the
  repo you can use straight away:

  ```bash
  npx degit https://github.com/seapagan/webpack-skel <folder to put it>
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

> Running `npm run build` or `yarn build` will create an un-minified version of
> the produced code for info and checking.

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
your new index.html and minimized CSS, JS. This folder can be served from any
standard web server or GH-Pages / Netlify etc.

## Implemented functionality

- Development server that hot-reloads on all code changes
- Create a standalone production build that can run in a browser.
- Babel for Javascript files to transpile to backwards-compatible code.
- JS and CSS are compressed and postfixed with a Hash for each code change. The
  HTML file is automatically updated with these.
- ESLint(JS) and StyleLint(CSS) are run automatically.

## Planned functionality

- html-validate is included for editor integration, but not yet run
  as part of the webpack process, this is planned and will fail or warn the
  build if errors.
- Add Typescript
- Add SCSS/SASS/PostCSS integration
- Add favicon automatically if exists
