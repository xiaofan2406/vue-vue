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
  return Boolean(store.$data);
}


function createStore(substores) {
  const rootStore = {};
  const names = Object.keys(substores);
  for (const name of names) {
    if (isValidStore(substores[name])) {
      rootStore[name] = substores[name];
    }
  }
  return rootStore;
}


module.exports = {
  createStore,
  install
};
