<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <Chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './views/Chat.vue';

export default {
  name: 'app',
  components: {
    Chat,
  },
};
</script>

<style>
</style>
