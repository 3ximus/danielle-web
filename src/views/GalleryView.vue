<script setup lang="ts">
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
import router from "@/router";
import type { Work } from "@/works";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { gallery } from "./gallery";

const galleryElement = ref<HTMLInputElement | null>(null);
let selectedWork = ref<Work>();

function openWork(work: Work) {
  selectedWork.value = work;
  router.push("/gallery/" + work.slug);
}

onBeforeRouteUpdate(async (to, from) => {
  if (to.name === "work") {
    disableBodyScroll(galleryElement.value!);
  } else if (from.name === "work") {
    enableBodyScroll(galleryElement.value!);
  }
});
</script>
<template>
  <section class="gallery" ref="galleryElement">
    <GalleryItemComponent
      v-for="item in gallery"
      :item="item"
      @open-work="openWork"
    />
    <RouterView v-slot="{ Component }" :work="selectedWork">
      <Transition name="fade">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </section>
</template>

<style scoped lang="scss">
$mincol-width: 300px;
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($mincol-width, 1fr));
  grid-auto-rows: auto;
}
</style>
