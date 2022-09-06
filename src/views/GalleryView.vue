<script setup lang="ts">
import { gallery } from "./gallery";
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
</script>
<template>
  <section>
    <GalleryItemComponent v-for="item in gallery" :item="item" />
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
