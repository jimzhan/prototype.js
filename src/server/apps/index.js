import glob from 'glob';
import path from 'path';
import serve from 'koa-static';
import Router from 'koa-router';
import logger from 'winston';
import config from '../config';

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
 *  @param {*} server `Koa` application instance.
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
      const baseUrl = prefix ? `${config.urls.prefix}${prefix}` : `${config.urls.prefix}`;
      const router = new Router({ prefix: baseUrl });

      Object.keys(routes).forEach((url) => {
        const [method, pattern] = url.split(/(\s+)/).filter(s => s.trim().length > 0);
        const views = routes[url];
        if (Array.isArray(views)) {
          router[method.toLowerCase()](pattern, ...views);
        } else {
          router[method.toLowerCase()](pattern, views);
        }
        server.use(router.routes()).use(router.allowedMethods());
        logger.debug(`${method} ${baseUrl}${pattern}`);
      });
    });
  });

  if (config.env === 'staging') {
    const dist = path.resolve(process.cwd(), config.static.root);
    server.use(serve(dist));
  }
}
