
export default {
  id: process.env.APP_ID,
  env: process.env.NODE_ENV || 'develop',
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG || true,
  // ############ Cache Settings ############
  cache: {

  },
  // ############ Mail Server Settings ############
  email: {
    host: process.env.EMAIL_HOST || '127.0.0.1',
    port: process.env.EMAIL_PORT || 25,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    useTLS: process.env.EMAIL_USE_TLS || false,
    useSSL: process.env.EMAIL_USE_SSL || false,
  },
  // ############ Session Settings ############
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
  // ############ Static Resources ############
  static: {
    root: process.env.STATIC_ROOT || 'dist',
  },
  URL: {
    prefix: '/v1',
  },
};
