import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import logger from 'winston';

import config from './config';
import bootstrap from './apps';

const server = new Koa();
logger.level = config.debug ? 'debug' : 'info';

if (config.env === 'staging') {
  const dist = path.resolve(process.cwd(), config.static.root);
  server.use(serve(dist));
}

bootstrap(server);
logger.debug(`-------------- ${config.env}`);

server.listen(config.port, () => {
  logger.info(`Server started at port ${config.port}`);
});

export default server;
