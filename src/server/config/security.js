export default {
  security: {
    secretKey: process.env.SECRET_KEY,
    // ############ CSRF Settings ############
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
};
