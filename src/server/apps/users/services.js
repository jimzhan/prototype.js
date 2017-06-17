import create from '@utils/http';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const client = create(baseUrl);

export async function list() {
  const response = await client.get(baseUrl);
  return response;
}

export async function get(key) {
  const response = await client.get(`${baseUrl}/${key}`);
  return response;
}
