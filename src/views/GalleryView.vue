<script setup lang="ts">
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
import { store } from "@/store";
import { onBeforeUnmount, ref, computed, onMounted } from "vue";
import { gallery } from "@/config/gallery";
import type { Work } from "@/config/works";

const collectionHeaders = ref<HTMLInputElement[] | null>(null);
const windowWidth = ref(window.innerWidth);

function scrolled() {
  if (!collectionHeaders.value) return;
  const index = collectionHeaders
    .value!.map((el) => window.scrollY > el.offsetTop - 140)
    .lastIndexOf(true);
  if (index >= 0) store.setGalleryCollection(gallery[index].name);
  else store.setGalleryCollection("");
}

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("scroll", scrolled);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrolled);
  window.removeEventListener("resize", handleResize);
  store.setGalleryCollection("");
});

const columnCount = computed(() => {
  if (windowWidth.value < 700) return 1;
  if (windowWidth.value < 1200) return 2;
  if (windowWidth.value < 1500) return 3;
  return 4;
});

function getColumns(works: Work[]) {
  const cols: Work[][] = Array.from({ length: columnCount.value }, () => []);
  works.forEach((item, index) => {
    cols[index % columnCount.value].push(item);
  });
  return cols;
}
</script>
<template>
  <section class="gallery">
    <div
      v-for="collection in gallery"
      :key="collection.name"
      class="collection"
    >
      <h2 ref="collectionHeaders" class="collection-name">
        {{ collection.name }}
      </h2>
      <div class="collection-elements">
        <div
          v-for="(column, index) in getColumns(collection.works)"
          :key="index"
          class="masonry-column"
        >
          <GalleryItemComponent
            v-for="item in column"
            :key="item.slug"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.collection-elements {
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: flex-start;
}

.masonry-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.collection-name {
  font-family: LemonMilk;
  margin: 10px;
}
</style>
