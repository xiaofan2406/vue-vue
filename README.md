### Vue-Vue
> Simple state management helper that uses a vue instance as the data layer

- the root store (`this.$store`) is just an instance of vue


### Install
```
npm install --save vue-vue
```


### Usage

```js
// tell Vue to use VueVue plugin
import VueVue from 'vue-vue';

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
