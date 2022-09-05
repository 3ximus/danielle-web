<script setup lang="ts">
import { gallery } from "./gallery";
import GalleryItemComponent from "@/components/GalleryItemComponent.vue";
</script>
<template>
  <section>
    <div class="content">
      <GalleryItemComponent v-for="work in gallery" :work="work" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  color: blue;
}
</style>
