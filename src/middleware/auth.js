import assert from 'assert';
import koajwt from 'koa-jwt';
import config from '../config';


export default function jwt(options = {}) {
  assert(
    (config.secret && config.secret.length === 60),
    'Application secret not found, `.env` missing?',
  );
  const settings = Object.assign({}, options, {
    secret: config.secret,
  });
  return koajwt(settings).unless({
    path: [
      /\/v1\/login/,
    ],
  });
}
