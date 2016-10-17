# VueVue
Using `vue` as data layer.


# VueVue store
Just an instance of `Vue`.

- data as state
- methods as actions
- computed as selectors (getters)


# Usage

```js
// tell Vue to use VueVue plugin
Vue.use(VueVue);

// create a VueVue store
const store = VueVue.createStore({
  counter: new Vue({
    data() {
      return {
        count: 0
      };
    },
    methods: {
      plus() {
        this.count++;
      },
      minus() {
        this.count--;
      }
    }
  })
});

// tell root Vue instance to use the store
new Vue({
  el: '#app',
  store
});

```
