Vue.js :revolving_hearts: Koa.js
===============
Production application boilerplate for Vue and Koa.

[![build](https://travis-ci.org/jimzhan/prototype.js.svg?branch=master)](https://travis-ci.org/jimzhan/prototype.js)
[![npm version](https://img.shields.io/npm/v/prototype.js.svg?style=flat-square)](https://www.npmjs.com/package/prototype.js)
[![npm downloads](https://img.shields.io/npm/dm/prototype.js.svg?style=flat-square)](https://www.npmjs.com/package/prototype.js)

## Client
* webpack supports with `develop`, `staging` and `release` settings profiles.

## Server
* intelligent/automatic routers registration.

  Module created under `apps` folder with routes defined in `index.js` will be registered onto server router automatically.
```javscript
// OPTIONAL prefix definition, by default, system will register the module name as its routing prefix.
//  `prefix -> false` will disable prefix for this module.
export const prefix = '/<module-prefix>';

import { list, get, create, update, remove } from './views';

export default {
  'GET /', list,
  'GET /:key', get,
  'POST /', create,
  'PUT  /:key', update,
  'DELETE /:key', delete,
}
```

TODOs
=====
- [x] ESLint rules supports
- [x] Flow supports
- [x] webpack/webpack-dev-server support
- [x] multiple webpack settings profiles
- [ ] multiple server settings profile with encryption supports
- [ ] unit test integration
- [ ] e2e test integration
