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

const zoomed = ref<HTMLDivElement | null>(null);
const zoom = (event: MouseEvent) => {
  const img = event.currentTarget as HTMLImageElement;
  const rect = img.getBoundingClientRect();

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  if (zoomed.value) {
    const zoomFactor = 2.5;
    zoomed.value.classList.add("visible");
    zoomed.value.style.backgroundSize = `${rect.width * zoomFactor}px ${
      rect.height * zoomFactor
    }px`;
    zoomed.value.style.backgroundPosition = `${x}% ${y}%`;

    const popupSize = window.innerWidth * 0.25; // $popup_size: 25vw
    const offset = 20;
    let left = event.clientX + offset;
    let top = event.clientY + offset;
    // clamp to viewport
    left = Math.max(0, Math.min(left, window.innerWidth - popupSize));
    top = Math.max(0, Math.min(top, window.innerHeight - popupSize));

    zoomed.value.style.left = `${left}px`;
    zoomed.value.style.top = `${top}px`;
  }
};

const hideZoom = () => zoomed.value?.classList.remove("visible");
</script>

<template>
  <div class="cover-image">
    <a :href="props.coverImage" target="_blank">
      <img
        :src="props.coverImage"
        @mousemove="zoom"
        @mouseleave="hideZoom"
        onload="this.style.transform='scale(1)'"
        :alt="props.coverImage"
      />
    </a>
    <div
      ref="zoomed"
      v-if="!isMobile"
      class="zoomed"
      :style="{
        backgroundImage: `url('${props.coverImage}')`,
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
  a {
    display: contents;
    &:hover ~ .zoomed {
      opacity: 1;
    }
  }
  img {
    max-height: 100%;
    transform: scale(1.5);
    transition: 0.5s;
    object-fit: contain;
    cursor: zoom-in;
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
