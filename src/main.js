import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import socket from './plugins/socket';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/base.css';
import store from './store';
import router from './router';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(socket);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
