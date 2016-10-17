import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './app/Home';
import Todo from './app/Todo';
import Project from './app/Project';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todo },
  { path: '/todo/:filter', component: Todo },
  { path: '/project', component: Project }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


export default router;
