<script setup lang="ts">
import { store } from "@/store";

function toogleFlash(event: Event) {
  store.isFlashOn = (event.target as HTMLInputElement).checked;
}
</script>

<template>
  <div class="switch">
    <input class="l" type="checkbox" @change="toogleFlash" />
  </div>
</template>

<style scoped lang="scss">
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.l {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset;
  color: #fdea7b;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:before,
  &:after {
    content: "";
    display: block;
  }
  &:before {
    background-color: #d7d7d7;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;
  }
  &:after {
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
        50% 100%,
      repeating-linear-gradient(
          90deg,
          #bbb 0,
          #bbb,
          #bbb 20%,
          #999 20%,
          #999 40%
        )
        0 50% / 50% 100%,
      radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;
  }
  /* Checked */
  &:checked {
    background-color: #555;
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
    &:before {
      background-color: currentColor;
      transform: translateX(125%);
    }
    &:after {
      border-left-color: currentColor;
      transform: translateX(-2.5%) rotateY(180deg);
    }
  }
  /* Other States */
  &:focus {
    /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
    outline: 0;
  }
}
</style>
