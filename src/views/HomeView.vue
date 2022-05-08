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

<template>
  <section class="slider">
    <div class="slider-item" v-for="slide in homeSlides">
      <img :src="slide" alt="" />
    </div>
  </section>
</template>

<style scope lang="scss">
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
