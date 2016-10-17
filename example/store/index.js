import Vue from 'vue';
import VueVue from 'src';

import todoStore from './todo-store';
import projectStore from './project-store';


Vue.use(VueVue);


export default VueVue.createStore({
  todoStore: todoStore(),
  projectStore: projectStore()
});
