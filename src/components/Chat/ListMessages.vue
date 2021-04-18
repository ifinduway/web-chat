<template lang="pug">
  #list-messages
    .messages(v-for="(msg, index) in messages")
      span.d-flex
        .name.mr-2(v-if="msg.user" :style="{color: msg.user.color}") {{msg.user.name}}:
        .message {{msg.message}}
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['socket'],
  computed: mapState('chat', [
    'messages',
    'user',
    'color',
  ]),
  watch: {
    messages(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
#list-messages {
  width: 100%;
  padding: 0 100px;
}
.messages {
  animation-duration: 1s;
  animation-name: slide;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  padding: 10px 0;
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
