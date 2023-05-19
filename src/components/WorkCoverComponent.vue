<script setup lang="ts">
import SoldIconComponent from "@/components/SoldIconComponent.vue";
import { computed, ref } from "vue";

const isMobile = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
});

const props = defineProps({
  coverImage: String,
  sold: Boolean,
});

const zoomed = ref<HTMLInputElement | null>(null);
const zoom = (event: MouseEvent) => {
  const original = event.target as HTMLElement;
  const imgWidth = original.offsetWidth;
  const imgHeight = original.offsetHeight;
  let percentageX = (event.offsetX / imgWidth) * 100;
  let percentageY = (event.offsetY / imgHeight) * 100;
  if (zoomed.value) {
    zoomed.value.classList.add('visible')
    zoomed.value.style.backgroundPositionX = `${percentageX}%`;
    zoomed.value.style.backgroundPositionY = `${percentageY}%`;
    zoomed.value.style.left = `${event.clientX + 50}px`;
    zoomed.value.style.top = `${event.clientY - 200}px`;
  }
};
</script>

<template>
  <div class="cover-image">
    <img
      :src="props.coverImage"
      @mousemove="zoom"
      onload="this.style.transform='scale(1)'"
    />
    <div
      ref="zoomed"
      v-if="!isMobile"
      class="zoomed"
      :style="{
        background: `url('${props.coverImage}') no-repeat`,
      }"
    ></div>
    <SoldIconComponent v-if="props.sold" />
  </div>
</template>

<style scoped lang="scss">
$popup_size: 25vw;

.cover-image {
  width: fit-content;
  max-width: 50%;
  text-align: center;
  img {
    max-height: 100%;
    transform: scale(1.5);
    transition: 0.5s;
    object-fit: contain;
    cursor: zoom-in;
    &:hover ~ .zoomed {
      opacity: 1;
    }
  }

  .zoomed.visible {
    width: $popup_size;
    height: $popup_size;
    pointer-events: none;
    border-radius: 5%;
    border: 4px solid #222;
    box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.4s;
  }
}
@media (max-width: 800px) {
  .cover-image {
    max-width: 100vw;
    img {
      max-width: 100%;
    }
  }
}
</style>
