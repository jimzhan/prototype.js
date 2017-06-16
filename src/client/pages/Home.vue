<template>
  <div>
    <nav-bar></nav-bar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: { NavBar },
};
</script>
