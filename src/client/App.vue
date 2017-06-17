<template>
  <div>
    <x-nav></x-nav>
    <main class="row medium-10 large-9 columns">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <x-footer></x-footer>
  </div>
</template>

<script>
import XNav from '@components/XNav';
import XFooter from '@components/XFooter';

export default {
  name: 'app',
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
  components: { XNav, XFooter },
};
</script>

<style lang="scss" scoped>
</style>
