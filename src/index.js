const Vue = require('vue');


module.exports = {
  install(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.store) {
          this.$store = options.store;
        } else if (options.parent && options.parent.$store) {
          this.$store = options.parent.$store;
        }
      }
    });
  },

  createStore(substores) {
    return new Vue({
      data() {
        return substores;
      }
    });
  }
};
