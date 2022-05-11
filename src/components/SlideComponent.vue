<template>
  <div class="slider-item" >
    <img :src="slideSrc" onload="this.style.opacity=1" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    slideSrc: String
  }
}
</script>

<style scoped lang="scss">
.slider-item {
  height: 100%;
  margin: 10px;
  position: relative;
  cursor: pointer;
  img {
    max-height: calc(100vh - 150px);
    opacity: 0;
    transition: opacity 1s;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #00000033;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s;
  }
  &:hover::after {
    opacity: 1;
  }
}
</style>
