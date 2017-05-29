import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
  ],
});
