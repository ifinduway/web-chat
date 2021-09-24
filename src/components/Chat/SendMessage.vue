<template lang="pug">
  form#send-message
    input.input-text(v-model="message" type="text" placeholder="Сообщение...")
    button.input-submit(@click.prevent="sendMessage")
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['socket'],
  data() {
    return {
      message: '',
    };
  },
  computed: mapState('chat', [
    'user',
  ]),
  methods: {
    ...mapActions('chat', {
      pushMessage: 'PUSH_MSG',
    }),
    sendMessage() {
      if (this.message && this.user.name) {
        const data = {
          user: this.user,
          message: this.message,
        };
        this.$sendMessage(data);
        this.message = '';
      }
    },
  },
  mounted() {
    this.$socket.on('MESSAGE', (data) => {
      this.pushMessage(data);
    });
  },
};
</script>

<style lang="scss">
#send-message {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0 100px;
}

.input {
  &-text {
    border: none;
    background: transparent;
    outline: none;
    height: 50px;
    color: #fff;
    font-size: 21px;
    padding: 0 20px;
    width: 100%;
    border-bottom: 1px solid #fff;
  }

  &-submit {
    position: absolute;
    right: 100px;
    top: 20px;
    background: url('../../assets/images/play.svg');
    width: 20px;
    height: 20px;
    border: none;
  }
}
</style>
