<template>
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<script>
export default {
  name: 'app',
};
</script>
