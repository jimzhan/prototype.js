
export async function list(ctx) {
  ctx.body = {
    data: [
      { a: { username: 'user a' } },
      { b: { username: 'user b' } },
      { c: { username: 'user c' } },
    ],
  };
}

export async function get(ctx) {
  const data = { data: {} };
  data[ctx.params.key] = { username: `user ${ctx.params.key}` };
  ctx.body = data;
}

export async function create(ctx) {
  ctx.status = 201;
  ctx.body = { data: { abc: { username: 'user abc' } } };
}

export async function update(ctx) {
  const data = { data: {} };
  data[ctx.params.key] = { username: 'updated user abc' };
  ctx.body = data;
}

export async function remove(ctx) {
  ctx.status = 204;
}
