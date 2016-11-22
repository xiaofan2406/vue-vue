import Vue from 'vue';
import VueVue from 'root'; // alias to ../../index.js

import CounterStore from './counter-store';
import TodoStore from './todo-store';
import ProjectStore from './project-store';


Vue.use(VueVue);


export default VueVue.createStore({
  todoStore: new TodoStore(),
  counterStore: new CounterStore(),
  projectStore: new ProjectStore()
}, { // in
  counterStore: {
    count: 8
  }
});
