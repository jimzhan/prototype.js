/* eslint-disable */
import 'script-loader!jquery';
import 'script-loader!what-input';
import 'script-loader!foundation-sites';
import $ from 'jquery';
/* eslint-enable */
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/styles/main.scss';

Vue.config.productionTip = false;
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
