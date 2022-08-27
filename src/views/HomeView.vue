<script setup lang="ts">
import PopSignComponent from "@/components/PopSignComponent.vue";
import type { PopSign } from "@/components/PopSignComponent.vue";

const popSigns: PopSign[] = [
  { image: "/artwork/litter_ahead_lilith/Lilith.png" },
  { image: "/artwork/pomegranates_botticelli/caution_bump.png" },
  { image: "/artwork/fallen_angel/as_above_so_below.png" },
];
</script>

<template>
  <div>
    <PopSignComponent
      v-for="(sign, index) in popSigns"
      :key="index"
      :sign="sign"
    ></PopSignComponent>
  </div>
</template>
