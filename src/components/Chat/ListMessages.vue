<template lang="pug">
  #list-messages(v-autoBottom)
    .messages(v-for="(msg, index) in messages")
      span.d-flex(:style="{'font-style': msg.user.name === 'server'?'italic':''}")
        .name.mr-2(
          v-if="msg.user"
          :style="{color: msg.user.color}")
          | {{msg.user.name}}:
        .message {{msg.message}}
</template>

<script>
import vue from 'vue';
import { mapState } from 'vuex';

export default {
  directives: {
    autoBottom: {
      update: (el) => {
        vue.prototype.$nextTick(() => el.scrollTo(0, el.scrollHeight));
      },
    },
  },
  computed: mapState('chat', [
    'messages',
    'user',
    'color',
  ]),
};
</script>

<style lang="scss">
#list-messages {
  width: 100%;
  padding: 0 100px;
  overflow: auto;
  max-height: 80vh;
}
.messages {
  animation-duration: 0.1s;
  animation-name: slide;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  padding: 10px 0;
}

@keyframes slide {
  from {
    margin-left: 10%;
    opacity: 0;
  }

  to {
    margin-left: 0%;
    opacity: 1;
  }
}
</style>
