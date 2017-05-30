import glob from 'glob';
import path from 'path';
import Router from 'koa-router';
import winston from 'winston';

/**
 * Bootstrap automatically loads all the applications under `apps` folders
 * & registers theirs routers (if proper router presented in `<module>/index.js`).
 *
 * Format of the router in `index.js`.
 * {OPTIONAL} `export const prefix = 'URL prefix for this module or `false` to disable it'.
 * {REQUIRED}
 *  ```
 *    export default {
 *      '<HTTP METHOD> <URL PATTERN>': <View Handler>
 *    }
 *  ```
 * @param {*} server `Koa` application instance.
 */
export default function bootstrap(server) {
  glob(`${__dirname}/*`, { ignore: '**/index.js' }, (error, matches) => {
    if (error) { throw error; }

    matches.forEach((abspath) => {
      /* eslint-disable */
      const module = require(abspath);
      /* eslint-enable */
      if (!module.default) { return; }

      const routes = module.default;
      const basename = path.basename(abspath);
      const prefix = (module.prefix === false) ? undefined : (module.prefix || `/${basename}`);
      const router = prefix ? new Router({ prefix }) : new Router();

      Object.keys(routes).forEach((url) => {
        const [method, pattern] = url.split(/(\s+)/).filter(s => s.trim().length > 0);
        router[method.toLowerCase()](pattern, routes[url]);
        server.use(router.routes()).use(router.allowedMethods());
        winston.debug(`[${basename}] ${method} ${prefix ? (prefix + pattern) : pattern}`);
      });
    });
  });
}
