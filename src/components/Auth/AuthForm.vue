<template lang="pug">
  .container-fluid.d-flex.justify-content-center.align-items-center
    form#auth
        .mb-3
        label.form-label(for="name") {{label}}
        input#name(v-model="name" type="text")
        button.btn-submit(@click.prevent="handleAuth" type="submit")
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      name: '',
    };
  },

  methods: {
    ...mapActions('chat', {
      pushUser: 'PUSH_USER',
    }),

    handleAuth() {
      if (this.name) {
        this.pushUser(this.name);
        this.$router.push('/chat');
      }
    },
  },
};
</script>

<style lang='scss'>
#auth {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  border-radius: 10px;
  max-width: 550px;
  height: 300px;
  width: 100%;
  padding: 0 50px;
  position: relative;
}

#name {
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  max-width: 550px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 100;
  color: #fff;
  text-align: center;
  padding: 0 5px;
}

label {
  font-weight: 800;
  font-size: 35px;
}

.btn {
  &-submit {
    width: 20px;
    height: 20px;
    background: url('../../assets/images/play.svg');
    border: none;
    outline: none;
    position: absolute;
    bottom: 100px;
    right: 0;
  }
}
</style>
