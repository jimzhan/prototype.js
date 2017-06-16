<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
window.jQuery = jQuery;
window.$ = $;
/* eslint-enable */

export default {
  name: 'app',
  ready() {
    $(this.$el).foundation();
  },
};
</script>
