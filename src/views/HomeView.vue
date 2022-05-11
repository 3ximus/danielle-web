<template>
  <section class="slider">
    <div class="slider-slide-element">
      <div
        class="slider-item"
        v-for="(slide, index) in homeSlides"
        :key="index"
      >
        <img :src="slide" onload="this.style.opacity=1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      homeSlides: this.shuffleArray([
        "/artwork/72.webp",
        "/artwork/53.webp",
        "/artwork/57.webp",
        "/artwork/85.webp",
        "/artwork/35.webp",
        "/artwork/83.webp",
        "/artwork/11.webp",
        "/artwork/19.webp",
        "/artwork/39.webp",
        "/artwork/80.webp",
      ]),
    };
  },
  methods: {
    shuffleArray(array: string[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style scoped lang="scss">
.slider {
  width: fit-content;
  align-self: baseline;

  &-slide-element {
    display: flex;
    position: relative;
    left: 0;
    animation: horizontal-slider 80s cubic-bezier(0.31, 0.07, 0.73, 0.99)
      infinite;
    @media (max-width: 900px) {
      animation: horizontal-slider 120s cubic-bezier(0.31, 0.07, 0.73, 0.99)
        infinite;
    }
  }

  &-item {
    height: 100%;
    margin: 10px;
    img {
      max-height: calc(100vh - 150px);
      opacity: 0;
      transition: opacity 1s;
    }
  }
}

@keyframes horizontal-slider {
  0% {
    left: 0;
  }
  50% {
    left: calc(-100% + 99vw);
  }
  100% {
    left: 0;
  }
}
</style>
