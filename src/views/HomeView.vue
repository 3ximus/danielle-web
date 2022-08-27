<script setup lang="ts">
import PopSignComponent from "@/components/PopSignComponent.vue";
import type { PopSign } from "@/components/PopSignComponent.vue";

const grid: PopSign[][] = [
  [
    { image: "/artwork/litter_ahead_lilith/Lilith.png" },
    { image: "/artwork/pomegranates_botticelli/caution_bump.png" },
    { image: "/artwork/fallen_angel/as_above_so_below.png" },
  ],
  [
    { image: "/artwork/litter_ahead_lilith/Lilith.png" },
    { image: "/artwork/pomegranates_botticelli/caution_bump.png" },
    { image: "/artwork/fallen_angel/as_above_so_below.png" },
  ],
];
</script>

<template>
  <div class="container">
    <div class="row" v-for="row in grid">
      <PopSignComponent v-for="sign in row" :sign="sign" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  rotate: 45deg;
}

.row {
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
