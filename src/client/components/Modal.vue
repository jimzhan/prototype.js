<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <div id="modal-dialog" class="reveal" data-reveal>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  mounted() {
    this.modal = new Foundation.Reveal($('#modal-dialog'), {
      animationIn: 'scale-in-up',
    });
  },
  methods: {
    open() {
      this.modal.open();
    },
  },
  destroyed() {
    this.modal.destroy();
  },
};
</script>

<style lang="scss" scoped>
#modal-dialog {
  border-radius: 3px;
}
</style>
