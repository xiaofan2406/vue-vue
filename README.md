# Vue-Vue
Simple state management helper that uses a vue instance as the data layer

> the root store (`this.$store`) is just an instance of vue


### Install
```
npm install --save vue-vue
```


### Usage

```js
// tell Vue to use VueVue plugin
import VueVue from 'vue-vue';

Vue.use(VueVue);


// define a module
class CounterStore {
  constructor(init = {}) {
    this.count = init.count || 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}


// create a VueVue store
const store = VueVue.createStore({
  counterStore: new CounterStore()
});


// tell root Vue instance to use the store
new Vue({
  el: '#app',
  store
});


// use the store in any component
...
computed: {
  count(): {
    return this.$store.counterStore.count;
  }
}
...
```

### API

##### createStore(modules, initialState = null)
- Arguments:
  - `{Object} modules`
  - `{Object} initialState`, optional

- Note:
  - `modules` and `initialState` should have matching keys, unmatched will be ignored
  - the type of a module should not matter, as long as it has a property called `constructor` and uses it for initialization
