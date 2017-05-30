import Koa from 'koa';
import serve from 'koa-static';
import dotenv from 'dotenv';
import path from 'path';
import winston from 'winston';

import config from './config';
import bootstrap from './apps';

dotenv.config();
const server = new Koa();
winston.level = config.debug ? 'debug' : 'info';

if (config.env === 'staging') {
  const dist = path.resolve(process.cwd(), config.static.root);
  server.use(serve(dist));
}

bootstrap(server);

server.listen(config.port, () => {
  winston.info(`Server started at port ${config.port}`);
});

export default server;
