import client from '../services/apiService';
import characters from '../api/characters';

const addMethods = function (endpoints) {
  let namespace = {};
  Object.keys(endpoints).forEach((method) => {
    namespace[method] = function () {
      return endpoints[method].apply(api, arguments);
    };
  });
  return namespace;
};

export function init () {
  api.characters = addMethods(characters);

  return api;
};

let api = {
  axios: client,
  useMockData: true,
  server: 'https://gateway.marvel.com:443/v1/public',
  publicKey: '50480e93f4759a53b6ceaa7235ca1626'
};

export default api;
