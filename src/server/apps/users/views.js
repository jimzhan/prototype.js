import * as models from './models';

export async function list(ctx) {
  ctx.body = models.find();
}

export async function get(ctx) {
  ctx.body = models.get(ctx.params.key);
}

export async function create(ctx) {
  ctx.body = models.create();
  ctx.status = 201;
}

export async function update(ctx) {
  ctx.body = models.update(ctx.params.key);
}

export async function remove(ctx) {
  models.remove(ctx.params.key);
  ctx.status = 204;
}
