# SeMI-Website ![Travis Build](https://travis-ci.org/SeMI-network/semi-website.svg?branch=master "Logo Travis Build")

Dependencies:
- [Bundler](https://bundler.io/)
- [npm](https://www.npmjs.com/)

## Local development

To start a project first install Bundler as described [in the Bundler documentation](https://bundler.io/).

To install the dependencies (used for jekyll page generation) run: 

```bash
$ bundle install
``` 

Also install npm dependencies:

```bash
$ npm install
```

To build and start the **local development** website:

```bash
$ npm run local
```

To edit JS run webpack and let it watch for changes:

```bash
$ npm run build-js-dev
```

Run eslint and prettier to see code formatting errors

```bash
$ npm run eslint
$ npm run prettier
```

To rewrite prettier errors automatically run:

```bash
$ prettier --write ./js-src/modules/**
```
