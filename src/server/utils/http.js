import axios from 'axios';

const create = (baseUrl, options) => {
  const settings = Object.assign({}, {
    // SEE https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    headers: {
      credentials: baseUrl.startsWith('http') ? 'include' : 'same-origin',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  }, options);
  settings.baseURL = baseUrl;
  return axios.create(settings);
};

export default create;
