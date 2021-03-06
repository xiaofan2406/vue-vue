import Vue from 'vue';

import 'animate.css';
import App from './app/App';

import store from './store';
import router from './router';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
