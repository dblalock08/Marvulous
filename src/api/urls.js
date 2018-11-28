import api from './index';

const getCharacterUrl = function () {
  if (api.useMockData) {
    return `/static/mock/characters_v01.json`;
  } else {
    return `${api.server}/characters?apikey=${api.publicKey}`;
  }
};

export default {
  getCharacterUrl
};
