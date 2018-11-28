import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import api from './plugins/api';

Vue.config.productionTip = false;
Vue.use(api);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  api,
  render: h => h(App)
});
