<script setup lang="ts">
import SlideComponent from "@/components/SlideComponent.vue";
import type { Slide } from "@/components/SlideComponent.vue";
</script>

<template>
  <section class="slider">
    <div class="slider-slide-element">
      <SlideComponent
        v-for="(slide, index) in slides"
        :key="index"
        :slide="slide"
      ></SlideComponent>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    slides: {
      type: Array as () => Array<Slide>,
      required: true,
    },
  },
  created() {
    this.shuffleArray(this.slides);
    console.log(this.slides);
  },
  methods: {
    shuffleArray(array: any[]) {
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
    animation: horizontal-slider 90s cubic-bezier(0.31, 0.07, 0.73, 0.99)
      infinite;
    @media (max-width: 900px) {
      animation: horizontal-slider 120s cubic-bezier(0.31, 0.07, 0.73, 0.99)
        infinite;
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
