<template>
  <div>
    <div class="progress"
        v-bind:class="level"
        role="progressbar" 
        tabindex="0" 
        aria-valuemin="0" 
        aria-valuemax="100"
        :aria-valuenow="progress">
      <span class="progress-meter" v-bind:style="{ width: `${progress}%` }">
        <p class="progress-meter-text">{{ progress }}%</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  computed: {
    level() {
      if (this.progress > 75) return 'alert';
      if (this.progress > 50) return 'warning';
      if (this.progress > 25) return 'success';
      return 'secondary';
    },
  },
  props: {
    progress: {
      type: Number,
      default() { return 0; },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
