import Status from 'http-status-codes';

const [status, message] = [
  Status.UNPROCESSABLE_ENTITY,
  Status.getStatusText(Status.UNPROCESSABLE_ENTITY),
];

/**
 * Validation middleware with specific name/regex paris for incoming request body.
 * @param {object} options - parameter & its regular expression paris.
 */
export function params(options = {}) {
  const middleware = async (ctx, next) => {
    const kwargs = ctx.request.body;
    Object.entries(options).forEach(([k, v]) => {
      if (!(Object.prototype.hasOwnProperty.call(kwargs, k) || v.test(kwargs[k]))) {
        ctx.throw(status, message);
      }
    });
    return next();
  };
  return middleware;
}

/**
 * Simple HTTP response prepender.
 * @param {object} options - prepender http response headers.
 */
export function headers(options = {}) {
  const middleware = async (ctx, next) => {
    Object.entries(options).forEach(([k, v]) => {
      ctx.set(k, v);
    });
    return next();
  };
  return middleware;
}

