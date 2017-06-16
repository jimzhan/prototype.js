<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'app',
  ready() {
    $(this.$el).foundation();
  },
};
</script>
