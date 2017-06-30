import dotenv from 'dotenv';

dotenv.config();

const configure = () => ({
  id: process.env.APP_ID,
  env: process.env.NODE_ENV || 'develop',
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG || true,
  secret: process.env.SECRET,
  // ------------ Database Settings ------------
  db: {
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_DATABSE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    storage: process.env.DB_STORAGE,
  },
  // ------------ Cache Settings ------------
  cache: {

  },
  // ------------ Mail Server Settings ------------
  mail: {
    host: process.env.MAIL_HOST || '127.0.0.1',
    port: process.env.MAIL_PORT || 25,
    from: process.env.MAIL_FROM,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    useTLS: process.env.MAIL_USE_TLS || false,
  },
  // ------------ Session Settings ------------
  session: {
    cacheAlias: process.env.SESSION_CACHE_ALIAS,
    cookieAge: process.env.SESSION_COOKIE_AGE,
    cookieDomain: process.env.SESSION_COOKIE_DOMAIN,
    cookieHttpOnly: process.env.SESSION_COOKIE_HTTPONLY,
    saveEveryRequest: process.env.SESSION_SAVE_EVERY_REQUEST,
    expireAtBrowserClose: process.env.SESSION_EXPIRE_AT_BROWSER_CLOSE,
    sessionEngine: process.env.SESSION_ENGINE,
    sessionSerializer: process.env.SESSION_SERIALIZER,
  },
  // ------------ Security Settings ------------
  security: {
    secretKey: process.env.SECRET_KEY,
    CSRF: {
      cookieAge: process.env.CSRF_COOKIE_AGE || 31449600,
      cookieDomain: process.env.CSRF_COOKIE_DOMAIN,
      cookieHttpOnly: process.env.CSRF_COOKIE_HTTPONLY || false,
      cookieName: process.env.CSRF_COOKE_NAME || 'csrftoken',
      cookiePath: process.env.CSRF_COOKIE_PATH || '/',
      cookieSecure: process.env.CSRF_COOKIE_SECURE || false,
      useSession: process.env.CSRF_USE_SESSION || false,
      headerName: process.env.CSRF_HEADER_NAME || 'HTTP_X_CSRFTOKEN',
      trustedOrigin: process.env.CSRF_TRUSTED_ORIGIN,
    },
  },
  // ------------ Static Resources ------------
  static: {
    root: process.env.STATIC_ROOT || 'dist',
  },
  // ------------ Remote FS ------------
  filesystem: {
    root: process.env.RFS_ROOT || '/tmp',
  },
  // ------------ URL Settings ------------
  urls: {
    prefix: process.env.URL_PREFIX || '/v1',
  },
});

export default configure();
