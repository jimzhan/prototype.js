<template>
  <div>
    <h2>DEMO</h2>
    <button @click="openModal()" class="button round">Open Modal</button>
    <modal ref="modal">
      <h3>Header</h3>
      <p>This is a Modal Dialog</p>
    </modal>
  </div>
</template>

<script>
import Modal from '@components/Modal';

export default {
  name: 'demo',
  components: { Modal },
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
  },
};
</script>
