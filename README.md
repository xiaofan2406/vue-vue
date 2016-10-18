### Vue-Vue
> Using `vue` as data layer.


### Vue-Vue store
Just an instance of `vue`.

- data as state
- methods as actions
- computed as selectors (getters)


### Usage

```js
// tell Vue to use VueVue plugin
Vue.use(VueVue);


// define a sub-store
class CounterStore {
  constructor() {
    this.count = 0;
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
