import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../views/Auth.vue';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
