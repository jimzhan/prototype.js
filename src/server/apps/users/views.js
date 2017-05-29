/* @flow */

export async function list(ctx) {
  ctx.body = 'listing users';
}

export async function get(ctx) {
  ctx.body = `getting user for key: ${ctx.params.key}`;
}

export async function create(ctx) {
  ctx.body = 'creating new user';
}

export async function update(ctx) {
  ctx.body = `updating user for key: ${ctx.params.key}`;
}

export async function remove(ctx) {
  ctx.body = `remove user for key: ${ctx.params.key}`;
}
