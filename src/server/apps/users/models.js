import winston from 'winston';

export function find() {
  return {
    data: [
      { a: { username: 'user a' } },
      { b: { username: 'user b' } },
      { c: { username: 'user c' } },
    ],
  };
}

export function get(key) {
  const body = { data: {} };
  body.data[key] = { username: `user ${key}` };
  return body;
}

export function create() {
  return { data: { abc: { username: 'user abc' } } };
}

export function update(key) {
  const body = { data: {} };
  body.data[key] = { username: 'updated user abc' };
  return body;
}

export function remove(key) {
  winston.debug(`deleting user: ${key}...`);
}
