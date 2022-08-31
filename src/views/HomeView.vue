<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";
import throttle from "lodash.throttle";
import { onBeforeMount, onUnmounted } from "vue";
import { grid } from "./home-signs";

const xOffset = (val: number) =>
  document.body.style.setProperty("--x-offset", `${val.toFixed(0)}px`);
const yOffset = (val: number) =>
  document.body.style.setProperty("--y-offset", `${val.toFixed(0)}px`);

const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;

document.body.onmousemove = throttle((event: MouseEvent) => {
  xOffset(-event.clientX + fullWidth / 2);
  yOffset(-event.clientY + fullHeight / 2);
}, 100);

window.ondeviceorientation = throttle(function (
  this: { x: number; y: number },
  event: DeviceOrientationEvent
) {
  document.body.onmousemove = null; // disable mouse move
  if (!event.gamma || !event.beta) return;

  const x = event.gamma! * 30;
  const y = event.beta! * 30;

  // don't allow every call to update values
  if (Math.abs(x - (this.x || 0)) > 50) this.x = x;
  if (Math.abs(y - (this.y || 0)) > 50) this.y = y;

  xOffset(this.x);
  yOffset(this.y);
},
100);

// Lifecycle Events
onUnmounted(() => store.flashOff());
onBeforeMount(() => {
  xOffset(0);
  yOffset(0);
});
</script>

<template>
  <section>
    <div class="valign">
      <div class="container">
        <div class="row" v-for="row in grid">
          <PopSignComponent v-for="sign in row" :sign="sign" />
        </div>
      </div>
    </div>
    <div class="valign valign-dark" :flash-on="store.isFlashOn">
      <div class="container">
        <div class="row" v-for="row in grid">
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
$switch-position: 50px;
$mouse-move-attenuation: 0.04;

section {
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
  &-dark {
    background-color: var(--background-dark-color);
    transition: clip-path 0.8s cubic-bezier(1, 0, 0.2, 1);
    z-index: 2;
    clip-path: circle(0% at calc(100% - 80px) calc(100% - 60px));
    &[flash-on="true"] {
      /* dark background animation */
      clip-path: circle(
        150% at calc(100% - $switch-position) calc(100% - $switch-position)
      );
    }
  }
  .container {
    transition: transform 0.1s linear;
    transform: translate(
        calc(var(--x-offset) * $mouse-move-attenuation),
        calc(var(--y-offset) * $mouse-move-attenuation)
      )
      rotate(45deg);

    backface-visibility: hidden;
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

.switch {
  position: absolute;
  bottom: $switch-position;
  right: $switch-position;
  z-index: 100;
}

@media (max-width: 800px) {
  .valign .container {
    width: 100vw;
    transform: translate(
        calc(var(--x-offset) * $mouse-move-attenuation),
        calc(var(--y-offset) * $mouse-move-attenuation)
      )
      rotate(45deg) scale(0.8);
  }
  .row {
    &:nth-child(1) {
      display: none;
    }
    &:nth-child(5) {
      display: none;
    }
  }
}
</style>
