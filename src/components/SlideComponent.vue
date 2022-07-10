<script setup lang="ts">
export declare interface Slide {
  cover: string;
  title: string;
  description?: string;
}

defineProps({
  slide: {
    type: Object as () => Slide,
    required: true,
  },
});

function poop() {
  console.log("poop");
}
</script>

<template>
  <div class="slider-item" @click="poop">
    <img :src="slide.cover" onload="this.style.opacity=1" />
    <h1>{{ slide.title }}</h1>
  </div>
</template>

<style scoped lang="scss">
.slider-item {
  margin: 10px;
  position: relative;
  cursor: pointer;
  height: calc(100vh - 150px);
  img {
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: var(--background-color-lighter);
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
  h1 {
    position: absolute;
    bottom: 0;
  }
}
</style>
