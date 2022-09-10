<script setup lang="ts">
import type { GalleryItem } from "../works";
defineProps({
  item: {
    type: Object as () => GalleryItem,
    required: true,
  },
  flash: Boolean,
});
</script>

<template>
  <div class="item" @click="$emit('open-work', item.work)">
    <!-- <RouterLink :to="'/gallery/' + item.work.slug"> -->
    <img :src="item.work.cover" />
    <!-- </RouterLink> -->
  </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: 800px) {
  .tall {
    grid-row: span 2 / auto;
  }

  .fat {
    grid-column: span 2 / auto;
  }
}

.item {
  transition: all 0.3s ease-out;
  cursor: pointer;
  margin: 10px;
  &:hover {
    scale: 1.02;
    opacity: 0.4;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    object-fit: cover;
  }
}
</style>
