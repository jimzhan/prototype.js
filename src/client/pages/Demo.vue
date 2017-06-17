<template>
  <div>
    <h2>DEMO</h2>
    <progress-bar :rate=79></progress-bar>
  </div>
</template>

<script>
import ProgressBar from '@components/ProgressBar';

export default {
  name: 'demo',
  components: { ProgressBar },
};
</script>
