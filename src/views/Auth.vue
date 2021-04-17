<template lang="pug">
  AuthForm(:label="`What's your name?`")
</template>

<script>
import AuthForm from '../components/Auth/AuthForm.vue';

export default {
  components: {
    AuthForm,
  },
};
</script>
