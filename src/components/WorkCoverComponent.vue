<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  coverImage: String,
});

const zoomed = ref<HTMLInputElement | null>(null);
const zoom = (event: MouseEvent) => {
  const original = event.target as HTMLElement;
  const x = event.pageX - original.offsetLeft; // this is wrong
  const y = event.pageY - original.offsetTop; // this is wrong
  const imgWidth = original.offsetWidth;
  const imgHeight = original.offsetHeight;
  let percentageX = (x / imgWidth) * 100;
  let percentageY = (y / imgHeight) * 100;

  if (zoomed.value) {
    zoomed.value.style.backgroundPositionX = `${percentageX}%`;
    zoomed.value.style.backgroundPositionY = `${percentageY}%`;
    zoomed.value.style.left = `${event.clientX + 50}px`;
    zoomed.value.style.top = `${event.clientY - 200}px`;
  }
};
</script>

<template>
  <div>
    <img
      :src="props.coverImage"
      @mousemove="zoom"
      onload="this.style.transform='scale(1)'"
    />
    <div
      ref="zoomed"
      class="zoomed"
      :style="{
        background: `url('${props.coverImage}') no-repeat`,
      }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
$popup_size: 400px;

img {
  width: 100%;
  max-height: 100%;
  transform: scale(1.5);
  transition: 0.5s;
  object-fit: contain;
  cursor: zoom-in;
  &:hover ~ .zoomed {
    opacity: 1;
  }
}

.zoomed {
  width: $popup_size;
  height: $popup_size;
  pointer-events: none;
  border-radius: 40%;
  border: 4px solid #222;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.4s;
}
</style>
