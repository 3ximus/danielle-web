<script setup lang="ts">
import { store } from "@/store";
import { ref } from "vue";

const lightSwitch = ref<HTMLInputElement | null>(null);
function toogleFlash(event: Event) {
  store.isFlashOn = (event.target as HTMLInputElement).checked;
  lightSwitch.value?.classList.remove("animate");
  lightSwitch.value?.offsetWidth; // trigger animation
  lightSwitch.value?.classList.add("animate");
}
</script>

<template>
  <div class="light-switch" ref="lightSwitch">
    <input id="flashToogle" type="checkbox" @change="toogleFlash" />
    <label for="flashToogle"
      ><img src="@/assets/chain.webp" alt="chain"
    /></label>
  </div>
</template>

<style scoped lang="scss">
.light-switch {
  transition: 0.2s linear;
  transform: translate(var(--x-offset), calc(var(--y-offset) - 160px));
  cursor: pointer;
  width: fit-content;
  z-index: 10;
  position: absolute;
  right: 50px;
  filter: drop-shadow(0 0 10px #222);
  &:hover {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 120px));
  }
  &.animate {
    animation: pullString 0.7s cubic-bezier(0, 0.94, 0.24, 0.73);
  }
  img {
    cursor: pointer;
    width: 40px;
  }
  #flashToogle {
    display: none;
  }
}

@media (max-width: 800px) {
  .light-switch {
    right: 30px;
    img {
      width: 30px;
    }
    &.animate {
      animation: pullStringMobile 0.7s cubic-bezier(0, 0.94, 0.24, 0.73);
    }
  }
}

@keyframes pullString {
  0% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 120px));
  }
  50% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 60px));
  }
  100% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 120px));
  }
}
@keyframes pullStringMobile {
  0% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 160px));
  }
  50% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 100px));
  }
  100% {
    transform: translate(var(--x-offset), calc(var(--y-offset) - 160px));
  }
}
</style>
