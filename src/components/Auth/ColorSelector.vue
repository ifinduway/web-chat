<template lang="pug">
  .color-picker.d-flex.justify-content-center.mt-3
    .color(v-for="(item, index) in colors"
          :key="item"
          :class="{'active': (activeColor === index)}"
          :style="{background: item}"
          @click="handleColor(item, index)")
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    colors: {
      type: Array,
      default: () => ['red'],
    },
  },
  mounted() {
    this.handleColor(this.colors[0], 0);
  },
  data() {
    return {
      activeColor: null,
    };
  },
  methods: {
    ...mapActions('chat', {
      pushColor: 'PUSH_CLR',
    }),
    handleColor(item, index) {
      this.activeColor = index;
      this.pushColor(item);
    },
  },
};
</script>

<style lang="scss">
  .color-picker {
    width: 100%;
    height: 50px;
  }
  .color {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    cursor: pointer;
  }
    .active {
    border: 4px solid #fff;
  }
</style>
