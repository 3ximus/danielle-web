<template>
  <section class="slider">
    <div class="slider-item" v-for="(slide, index) in homeSlides" :key="index">
      <img :src="slide" alt="" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      homeSlides: [
        "/slides/1.webp",
        "/slides/2.webp",
        "/slides/3.webp",
        "/slides/4.webp",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  overflow-x: auto;
  width: 100%;

  &-item {
    flex-shrink: 0;
    height: 100%;
    margin: 10px;
  }
}
</style>
