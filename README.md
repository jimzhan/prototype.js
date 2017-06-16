Vue.js :revolving_hearts: Koa.js
================================
[![dependencies](https://david-dm.org/jimzhan/prototype.js.svg)](https://david-dm.org/jimzhan/prototype.js.svg)
[![build](https://travis-ci.org/jimzhan/prototype.js.svg?branch=master)](https://travis-ci.org/jimzhan/prototype.js)
[![npm version](https://img.shields.io/npm/v/prototype.js.svg?style=flat-square)](https://www.npmjs.com/package/prototype.js)
[![npm downloads](https://img.shields.io/npm/dm/prototype.js.svg?style=flat-square)](https://www.npmjs.com/package/prototype.js)

Production application boilerplate for Vue and Koa, batteries included:
+ ES6 + Babel
+ [ESLint](https://github.com/eslint/eslint) with the [Airbnb JavaScript](https://github.com/airbnb/javascript) rules.
+ [Mocha](https://github.com/mochajs/mocha) Unit testing and coverage with [Chai](https://github.com/chaijs/chai) assertion framework.
+ [Nightwatch](https://github.com/nightwatchjs/nightwatch) E2E UI automated testing framework.
+ [Editorconfig](http://editorconfig.org/) Consistent coding styles formatter.
+ [Yarn](https://yarnpkg.com/en/) Dependency management.
+ [Vue.js](https://github.com/vuejs/vue) Progressive frontend framework.
+ [Koa.js](https://github.com/koajs/koa) Next generation web framework.
+ [Dotenv](https://github.com/motdotla/dotenv) Production settings profile solution.
+ [Foundation](http://foundation.zurb.com/) Framework Integration.
+ NPM scripts for common operations.


## Client
* webpack supports with `develop`, `staging` and `release` settings profiles.

## Server
* configurable prefixed server endpoint (`/v1` by default).
* intelligent/automatic routes registration.

  Module created under `apps` folder with routes defined in `index.js` will be registered onto server router automatically.
```javscript
// OPTIONAL prefix definition, by default, system will register the module name as its routing prefix.
//  `prefix -> false` will disable prefix for this module.
export const prefix = '/<module-prefix>';

import * as mw from './middleware';
import * as views from './views';

export default {
  'GET /', views.list,
  'GET /:key', views.get,
  'POST /', [mw.acl, views.create],
  'PUT  /:key', views.update,
  'DELETE /:key', views.delete,
}
```

TODOs
=====
- [x] ESLint rules supports.
- [x] webpack/webpack-dev-server support.
- [x] NPM scripts for common operations.
- [x] multiple webpack settings profiles.
- [x] `dotenv` based multi settings profiles at server side.
- [x] Grouped routing system.
- [x] unit test integration
- [x] hot reload koa server
- [ ] e2e test integration
