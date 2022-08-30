<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";
import throttle from "lodash.throttle";
import { onBeforeMount, onUnmounted } from "vue";
import { grid } from "./home-signs";

onUnmounted(() => store.flashOff());
onBeforeMount(() => window); // TODO set offsets here

const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;
document.body.style.setProperty("--x-offset", "0px");
document.body.style.setProperty("--y-offset", "0px");

const onMouseMove = throttle((event: MouseEvent) => {
  document.body.style.setProperty(
    "--x-offset",
    `${-event.clientX + fullWidth / 2}px`
  );
  document.body.style.setProperty(
    "--y-offset",
    `${-event.clientY + fullHeight / 2}px`
  );
}, 100);

document.body.addEventListener("mousemove", onMouseMove);
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
$mouse-move-attenuation: 0.1;

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
  // subtract padding
  width: calc(100% - $left-offset);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: $left-offset;
  background-color: var(--background-color);
  transition: background-color 0.4s ease-out;
  &-dark {
    background-color: var(--background-dark-color);
    transition: clip-path 0.5s ease-out;
    z-index: 2;
    clip-path: circle(0% at calc(100% - 80px) calc(100% - 60px));
    &[flash-on="true"] {
      // dark background animation
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
</style>
