import { list, get, create, update, remove } from './views';

export default {
  'GET /': list,
  'GET /:key': get,
  'POST /': create,
  'PUT  /:key': update,
  'DELETE /:key': remove,
};
