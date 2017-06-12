import dotenv from 'dotenv';

dotenv.config();

const configure = () => ({
  id: process.env.APP_ID,
  env: process.env.NODE_ENV || 'develop',
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG || true,
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
  email: {
    host: process.env.EMAIL_HOST || '127.0.0.1',
    port: process.env.EMAIL_PORT || 25,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    useTLS: process.env.EMAIL_USE_TLS || false,
    useSSL: process.env.EMAIL_USE_SSL || false,
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
  urls: {
    prefix: process.env.URL_PREFIX || '/v1',
  },
});

export default configure();
