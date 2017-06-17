<template>
  <div class="progress">
    <span v-bind:style="{ width: `${rate}%` }" 
          v-bind:class="color">
      <span>{{ rate }}%</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  computed: {
    color() {
      if (this.rate < 20) return 'default';
      if (this.rate < 40) return 'green';
      if (this.rate < 60) return 'orange';
      if (this.rate < 80) return 'red';
      return 'blue';
    },
  },
  props: {
    rate: {
      type: Number,
      default() { return 0; },
    },
  },
};
</script>

<style lang="scss" scope>
@mixin box-sizing($val) {
  -webkit-box-sizing: $val;
  -moz-box-sizing: $val;
  box-sizing: $val;
}

@mixin user-select($val...) {
  -webkit-user-select: $val;
  -moz-user-select: $val;
  -ms-user-select: $val;
  user-select: $val;
}

@mixin box-shadow($shadows...) {
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

@function inverse-side($side) {
  @if $side==top {
    @return bottom;
  }
  @else if $side==bottom {
    @return top;
  }
  @else if $side==left {
    @return right;
  }
  @else if $side==right {
    @return left;
  }
}

@mixin linear-gradient($gradientLine, $colorStops...) {
  background-image: -webkit-linear-gradient($gradientLine, $colorStops);
  background-image: -moz-linear-gradient($gradientLine, $colorStops);
  background-image: -o-linear-gradient($gradientLine, $colorStops);
  @if length($gradientLine)==2 {
    background-image : linear-gradient(to #{inverse-side(nth($gradientLine, 1))} #{inverse-side(nth($gradientLine, 2))}, $colorStops);
  }
  @else {
    background-image : linear-gradient(to #{inverse-side($gradientLine)}, $colorStops);
  }
}

@mixin radial-gradient($gradient...) {
  background-image: -webkit-radial-gradient($gradient);
  background-image: -moz-radial-gradient($gradient);
  background-image: -o-radial-gradient($gradient);
  background-image: radial-gradient($gradient);
}

@mixin transition($transition...) {
  -webkit-transition: $transition;
  -moz-transition: $transition;
  -o-transition: $transition;
  transition: $transition;
}

@mixin transition-property($properties...) {
  -webkit-transition-property: $properties;
  -moz-transition-property: $properties;
  -o-transition-property: $properties;
  transition-property: $properties;
}

@mixin transform($transform...) {
  -webkit-transform: $transform;
  -moz-transform: $transform;
  -ms-transform: $transform;
  -o-transform: $transform;
  transform: $transform;
}

@mixin clearfix {
  zoom: 1;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
}

@mixin inline-block {
  display: inline-block;
  vertical-align: baseline;
  zoom: 1;
  *display: inline;
  *vertical-align: auto;
}

@mixin hide-text() {
  text-shadow: none;
  color: transparent;
}

@mixin hidpi {
  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-resolution: 144dpi) {
    @content;
  }
}

.progress {
  height: 20px;
  background: #ebebeb;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-radius: 10px;

  >span {
    $color: #ccc;
    position: relative;
    float: left;
    margin: 0 -1px;
    min-width: 30px;
    height: 18px;
    line-height: 16px;
    text-align: right;
    background: $color;
    border: 1px solid;
    border-color: darken($color, 5%) darken($color, 10%) darken($color, 18%);
    border-radius: 10px;
    display: table;
    @include linear-gradient(top, lighten($color, 14%), lighten($color, 6%) 70%, $color);
    @include box-shadow(inset 0 1px rgba(white, .3), 0 1px 2px rgba(black, .2));

    >span {
      padding: 0 8px;
      font-size: 11px;
      font-weight: bold;
      color: #404040;
      color: rgba(black, .7);
      display: table-cell;
      vertical-align: middle;
      text-shadow: 0 1px rgba(white, .4);
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      height: 18px;
      background: url('./progress.png') 0 0 repeat-x;
      border-radius: 10px;
    }
  }

  $colors: green #85c440,
  red #db3a27,
  orange #f2b63c,
  blue #5aaadb;

  @each $pair in $colors {
    .#{nth($pair, 1)} {
      $color: nth($pair, 2);
      background: $color;
      border-color: darken($color, 5%) darken($color, 10%) darken($color, 18%);
      @include linear-gradient(top,
      lighten($color, 20%),
      lighten($color, 8%) 70%,
      $color);
    }
  }
}
</style>
