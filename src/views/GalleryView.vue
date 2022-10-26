<script setup lang="ts">
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { gallery } from "./gallery";

const galleryElement = ref<HTMLInputElement | null>(null);

onBeforeRouteUpdate(async (to, from) => {
  if (to.name?.toString().startsWith("work")) {
    disableBodyScroll(galleryElement.value!);
  } else if (from.name?.toString().startsWith("work")) {
    enableBodyScroll(galleryElement.value!);
  }
});
</script>
<template>
  <section class="gallery">
    <div v-for="section in gallery" class="section" ref="galleryElement">
      <h2>{{ section.name }}</h2>
      <div class="section-elements">
        <GalleryItemComponent v-for="item in section.works" :item="item" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$mincol-width: 300px;
.section-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($mincol-width, 1fr));
  grid-auto-rows: auto;
}
</style>
