<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <div id="reveal-dialog" class="reveal" data-reveal>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'modal',
  mounted() {
    this.reveal = new Foundation.Reveal($('#reveal-dialog'), {
      animationIn: 'scale-in-up',
    });
  },
  methods: {
    open() {
      this.reveal.open();
    },
  },
  destroyed() {
    this.reveal.destroy();
  },
};
</script>

<style lang="scss" scoped>
#reveal-dialog {
  border-radius: 3px;
}
</style>
