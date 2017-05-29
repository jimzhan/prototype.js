/* @flow */
import Koa from 'koa';
import serve from 'koa-static';
import dotenv from 'dotenv';
import path from 'path';
import winston from 'winston';

import bootstrap from './apps';

dotenv.config();
winston.level = 'debug';

const server = new Koa();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'staging') {
  const root = path.resolve(__dirname, '../../../dist');
  server.use(serve(root));
}

bootstrap(server);

server.listen(port, () => {
  winston.info(`Server started at port ${port}`);
});
