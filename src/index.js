import Koa from 'koa';
import logger from 'winston';
import config from './config';
import bootstrap from './apps';


logger.level = config.debug ? 'debug' : 'info';

const server = new Koa();

bootstrap(server);

server.listen(config.port, () => {
  logger.info(`Server started at port ${config.port}`);
});

export default server;
