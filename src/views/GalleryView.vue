<script setup lang="ts">
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
import { store } from "@/store";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { gallery } from "./gallery";

const galleryElement = ref<HTMLInputElement[] | null>(null);
const collectionHeaders = ref<HTMLInputElement[] | null>(null);

function scrolled() {
  const index = collectionHeaders
    .value!.map((el) => window.scrollY > el.offsetTop - 140)
    .lastIndexOf(true);
  if (index >= 0) store.setGalleryCollection(gallery[index].name);
  else store.setGalleryCollection("");
}

onBeforeMount(() => window.addEventListener("scroll", scrolled));
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrolled);
  store.setGalleryCollection("");
});
</script>
<template>
  <section class="gallery">
    <div v-for="collection in gallery" class="collection" ref="galleryElement">
      <h2 ref="collectionHeaders" class="collection-name">
        {{ collection.name }}
      </h2>
      <div class="collection-elements">
        <GalleryItemComponent v-for="item in collection.works" :item="item" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$mincol-width: 300px;
.collection-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($mincol-width, 1fr));
  grid-auto-rows: auto;
}

.collection-name {
  font-family: LemonMilk;
  margin: 10px;
}
</style>
