<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";
import { onUnmounted } from "vue";
import { grid } from "./home-signs";

onUnmounted(() => store.flashOff());
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped lang="scss">
$skew-effect: 5vw;
$left-offset: 40px;
$switch-position: 50px;

.valign {
  position: absolute;
  top: 0;
  left: 0;
  // subtract padding
  width: calc(100vw - $left-offset);
  height: 100vh;
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
    transform: rotate(45deg);
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
