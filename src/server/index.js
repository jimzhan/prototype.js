import Koa from 'koa';
import serve from 'koa-static';
import dotenv from 'dotenv';
import path from 'path';
import winston from 'winston';

import bootstrap from './apps';

dotenv.config();

const server = new Koa();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'staging') {
  const dist = path.resolve(process.env.DIST || 'dist');
  server.use(serve(dist));
}

bootstrap(server);

server.listen(port, () => {
  winston.info(`Server started at port ${port}`);
});
