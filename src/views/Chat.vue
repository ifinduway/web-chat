<template lang="pug">
#chat.container-fluid.d-flex.flex-column.align-items-center
  ListMessages(:socket="socket")
  SendMessage(:socket="socket")
</template>

<script>
import io from 'socket.io-client';
import ListMessages from '../components/Chat/ListMessages.vue';
import SendMessage from '../components/Chat/SendMessage.vue';

export default {
  components: {
    ListMessages,
    SendMessage,
  },
  data() {
    return {
      message: '',
      socket: io('localhost:3001'),
    };
  },
};
</script>

<style lang="scss">
  #chat {
    height: 100vh;
  }
</style>
