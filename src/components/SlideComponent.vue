<template>
  <div class="slider-item" @click="poop">
    <img :src="slide.cover" onload="this.style.opacity=1" />
    <h1>{{ slide.title }}</h1>
  </div>
</template>

<script lang="ts">
export declare interface Slide {
  cover: string;
  title: string;
  description?: string;
}
export default {
  props: {
    slide: {
      type: Object as () => Slide,
      required: true,
    },
  },
  methods: {
    poop() {
      console.log("poop");
    },
  },
};
</script>

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
  h1 {
    position: absolute;
    bottom: 0;
  }
}
</style>
