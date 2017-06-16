<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
};
</script>
