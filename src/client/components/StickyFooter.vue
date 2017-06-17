<template>
  <footer>
    <div class="row">
      <div class="medium-2 columns">
        <span>Vivamus Hendrerit Arcu Sed Erat Molestie</span>
      </div>
      <div class="medium-2 large-offset-2 columns">
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
          <li><a href="#">Four</a></li>
        </ul>
      </div>
      <div class="medium-2 columns">
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
          <li><a href="#">Four</a></li>
        </ul>
      </div>
    </div>
  </footer>  
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '~styles/settings';

footer {
  color: $sticky-footer-color;
  height: $sticky-footer-height;
  background-color: $sticky-footer-bg;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
