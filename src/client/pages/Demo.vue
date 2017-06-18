<template>
  <div>
    <h2>DEMO</h2>
    <button @click="openModal()" class="button round">Open Modal</button>
    <modal ref="modal">
      <h3>Header</h3>
      <p>This is a Modal Dialog</p>
    </modal>
    <progress-bar ref="progressBar" v-bind:progress="progress"></progress-bar>
  </div>
</template>

<script>
import Modal from '@components/Modal';
import ProgressBar from '@components/ProgressBar';

export default {
  name: 'demo',
  components: { ProgressBar, Modal },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    increase() {
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          clearInterval(interval);
        }
      }, 1000);
    },
  },
  mounted() {
    this.increase();
  },
};
</script>
