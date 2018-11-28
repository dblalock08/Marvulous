let client;
let service = {};

// Request helpers
const reqMethods = [
  'request', 'delete', 'get', 'head', 'options', // url, config
  'post', 'put', 'patch' // url, data, config
];

const setupServiceMethods = () => {
  // setup the service methods
  reqMethods.forEach((method) => {
    service[method] = function () {
      if (!client) throw new Error('axios not installed');
      return client[method].apply(null, arguments);
    };
  });
};

export function init (newclient) {
  client = newclient;
  setupServiceMethods();
}

export default service;
