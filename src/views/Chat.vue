<template lang="pug">
.chat.container-fluid.d-flex.flex-column.align-items-center
  list-messages
  send-message(v-if="user")
</template>

<script>
import { mapState } from 'vuex';
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
    };
  },
  computed: mapState('chat', ['user']),
  mounted() {
    const data = {
      user: {
        name: 'server',
        color: '#d46fed',
      },
      message: `user ${this.user.name} is connected!`,
    };
    this.$sendMessage(data);
  },
};
</script>

<style lang="scss">
  .chat {
    height: 100vh;
    &-header {
      height: 50px;
      width: 100%;
      text-align: center;
      position: sticky;
      top: 0;
      background: #000;
      border-bottom: 1px solid #333;
    }
  }
</style>
