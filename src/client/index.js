/* eslint-disable */
import 'script-loader!jquery';
import 'script-loader!foundation-sites';
import $ from 'jquery';
/* eslint-enable */
import Vue from 'vue';
import App from './App';
import router from './router';
import './styles/main.scss';

Vue.config.productionTip = false;
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
  ready() {
    $(this.$el).foundation();
  },
});

// Foundation Init
// ----------------------
// eslint-disable-next-line
$(document).foundation();
