function install(_Vue) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
        // store injection
      if (options.store) {
        this.$store = options.store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
    }
  });
}


function isValidStore(store) {
  // TODO disallow some properties
  return store._isVue;
}


function createStore(substores) {
  return Object.keys(substores).reduce((acc, key) => {
    if (isValidStore(substores[key])) {
      acc[key] = substores[key];
    }
    return acc;
  }, {});
}


module.exports = {
  createStore,
  install
};
