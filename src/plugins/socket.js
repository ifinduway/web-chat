/* eslint-disable no-param-reassign */
import Vue from 'vue';
import io from 'socket.io-client';
import { mapState } from 'vuex';

const socket = io('http://localhost:3001');

const SocketPlugin = {
  install(vue) {
    mapState('chat', {
      pushMessage: 'PUSH_MSG',
    });
    vue.prototype.$sendMessage = (payload) => {
      socket.emit('SEND_MESSAGE', {
        message: payload.message,
        user: payload.user,
      });
    };
    vue.prototype.$receiveMessage = () => socket.on('MESSAGE', this.pushMessage);

    vue.prototype.$socket = socket;
  },
};

Vue.use(SocketPlugin);
