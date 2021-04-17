<template>
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>GALERKA CHAT</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group">
                  <label for="user">Имя:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Сообщение</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Отправить</button>
          </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('localhost:3001'),
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      if (this.message && this.user) {
        this.socket.emit('SEND_MESSAGE', {
          user: this.user,
          message: this.message,
        });
        this.message = '';
      }
    },
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];
    });
  },
};
</script>

<style>
.messages {
  animation-duration: 1s;
  animation-name: slide;
  border-left: 1px solid rgba(43, 43, 43, 0.2);
  padding-left: 1rem;
}

@keyframes slide {
  from {
    margin-left: 20%;
    opacity: 0;
  }

  to {
    margin-left: 0%;
    opacity: 1;
  }
}
</style>
