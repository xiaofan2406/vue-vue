import Vue from 'vue';
import VueVue from 'src';

import CounterStore from './counter-store';
import TodoStore from './todo-store';
import ProjectStore from './project-store';


Vue.use(VueVue);


export default VueVue.createStore({
  todoStore: new TodoStore(),
  counterStore: new CounterStore(),
  projectStore: new ProjectStore()
});
