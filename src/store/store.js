import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  characters: []
};

export default function createStore(){
  return new Vuex.Store({
    state
  });
}
