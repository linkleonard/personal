<template functional>
  <span class="wrapper">
    <!-- TODO: Is there a way to specify percentage values without using template expansion? -->
    <span :style="{ width: `${props.fill * 100}%` }" />
  </span>
</template>

<script>
export default {
  functional: true,
  name: 'ProgressBar',
  props: {
    fill: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$space: 2px;
$height: 14px;
$track-height: $height - 2 * $space;

span.wrapper {
  display: inline-block;
  position: relative;

  width: 100%;
  height: $height;

  border-radius: $height;
  background: #ffffff;
  border: 2px solid #aaaaaa;

  span {
    position: absolute;
    left: $space;
    top: $space;
    max-width: calc(100% - (2 * #{$space}));
    height: $track-height;
    background: #b3f199;
    border-radius: $track-height;
  }
}
</style>
