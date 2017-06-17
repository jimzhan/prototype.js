<template>
  <div>
    <nav-bar></nav-bar>
    <main class="row medium-10 large-9 columns">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <sticky-footer></sticky-footer>
  </div>
</template>

<script>
import NavBar from '@components/NavBar';
import StickyFooter from '@components/StickyFooter';

export default {
  name: 'app',
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
  components: { NavBar, StickyFooter },
};
</script>

<style lang="scss" scoped>
</style>
