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

  createStore(modules, initialState = null) {
    if (initialState) {
      const keys = Object.keys(initialState);
      for (const key of keys) {
        if (modules[key] && typeof modules[key].constructor === 'function') { // statekey matches store key
          modules[key] = new modules[key].constructor(initialState[key]);
        }
      }
    }

    return new Vue({
      data() {
        return modules;
      }
    });
  }
};
