import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import socket from './plugins/socket';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/base.css';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  store,
  router,
  socket,
  render: (h) => h(App),
}).$mount('#app');
