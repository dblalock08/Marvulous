import { init as apiService } from '../api/index';

export default {
  install (Vue, options) {
    Vue.prototype.$api = apiService();
  }
};
