<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";
import throttle from "lodash.throttle";
import { computed, onBeforeMount, onUnmounted } from "vue";
import { grid } from "@/config/home-signs";

const MOVEMENT_ATTENUATION = 0.04;

const xOffset = (val: number) =>
  document.body.style.setProperty(
    "--x-offset",
    `${(val * MOVEMENT_ATTENUATION).toFixed(0)}px`
  );
const yOffset = (val: number) =>
  document.body.style.setProperty(
    "--y-offset",
    `${(val * MOVEMENT_ATTENUATION).toFixed(0)}px`
  );

const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;

const OnMouseMove = throttle((event: MouseEvent) => {
  xOffset(-event.clientX + fullWidth / 2);
  yOffset(-event.clientY + fullHeight / 2);
}, 100);

// Link events
document.body.addEventListener("mousemove", OnMouseMove);

// Lifecycle Events
onUnmounted(() => store.flashOff());
onBeforeMount(() => {
  xOffset(0);
  yOffset(0);
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// remove elements of the home grid on mobile since they are unecessary to load and decrease performance
const computedGrid = computed(() => {
  if (isMobile())
    return grid
      .filter((_, index) => index > 0 && index < 4)
      .map((arr, index) => (index === 1 ? arr.slice(0, 3) : arr.slice(0, 2)));
  else return grid;
});
</script>

<template>
  <section class="home">
    <div class="valign valign-light" :flash-on="store.isFlashOn">
      <div class="container">
        <div class="row" v-for="row in computedGrid">
          <PopSignComponent v-for="sign in row" :sign="sign" />
        </div>
      </div>
    </div>
    <div class="valign valign-dark" :flash-on="store.isFlashOn">
      <div class="container">
        <div class="row" v-for="row in computedGrid">
          <PopSignComponent v-for="sign in row" :sign="sign" :flash="true" />
        </div>
      </div>
    </div>

    <LightSwitchComponent />
  </section>
</template>

<style scoped lang="scss">
$skew-effect: 5vw;
$left-offset: 40px;
$mouse-move-attenuation: 0.04;
$animation-time: 0.8s;

.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.valign {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - $left-offset);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: $left-offset;
  background-color: var(--background-color);
  &-light {
    opacity: 1;
    transition: opacity 0s;
    &[flash-on="true"] {
      opacity: 0;
      transition: opacity 0s $animation-time;
    }
  }
  &-dark {
    --light-position-x: 50px;
    --light-position-y: 50px;
    background-color: var(--background-dark-color);
    transition: clip-path $animation-time ease-in-out,
      opacity 0s $animation-time;
    z-index: 2;
    clip-path: circle(
      0% at calc(100% - var(--light-position-x)) var(--light-position-y)
    );
    opacity: 0;
    &[flash-on="true"] {
      /* dark background animation */
      clip-path: circle(
        150% at calc(100% - var(--light-position-x)) var(--light-position-y)
      );
      opacity: 1;
      transition: clip-path $animation-time ease-in-out, opacity 0s;
    }
  }
  .container {
    transition: transform 0.1s linear;
    transform: translate(var(--x-offset), var(--y-offset)) rotate(45deg);
    width: 50vw;
  }
}

.row {
  position: relative;
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  &:nth-child(1) {
    left: calc($skew-effect * 2);
  }
  &:nth-child(2) {
    left: $skew-effect;
  }
  &:nth-child(4) {
    left: -$skew-effect;
  }
  &:nth-child(5) {
    left: calc($skew-effect * -2);
  }
}

@media (max-width: 800px) {
  .valign {
    &-dark {
      --light-position-x: 45px;
      --light-position-y: 0px;
    }
    .container {
      width: 100vw;
      scale: 0.8;
      transform: translate(var(--x-offset), var(--y-offset)) rotate(45deg);
    }
  }
}
</style>
