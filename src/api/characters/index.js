import urls from '../urls';
import axios from 'axios';

const getAllCharacters = function () {
  return axios.get(urls.getCharacterUrl());
};

const getCharacters = function (searchInput) {
  let params = `&name=${searchInput.characterName}`;

  return axios.get(urls.getCharacterUrl() + params);
};

export default {
  getAllCharacters,
  getCharacters
};
