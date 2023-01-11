/* eslint-disable no-param-reassign */
import io from 'socket.io-client';
import { mapState } from 'vuex';

const socket = io('https://backend-webchat.onrender.com/');

export default {
  install(Vue) {
    mapState('chat', {
      pushMessage: 'PUSH_MSG',
    });
    Vue.prototype.$sendMessage = (payload) => {
      socket.emit('SEND_MESSAGE', {
        message: payload.message,
        user: payload.user,
      });
    };
    Vue.prototype.$receiveMessage = () => socket.on('MESSAGE', this.pushMessage);

    Vue.prototype.$socket = socket;
  },
};
