module.exports = (Vue) => {
  Vue.directive('auto-bottom', {
    update: (el) => {
      const temp = el;
      setTimeout(() => {
        temp.scrollTop = temp.scrollHeight;
      }, 0);
    },
  });
};
