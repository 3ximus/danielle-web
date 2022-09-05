<script setup lang="ts">
import type { Work } from "../works";
defineProps({
  work: {
    type: Object as () => Work,
    required: true,
  },
  flash: Boolean,
});
</script>

<template>
  <div class="pop">
    <div class="pop-container">
      <img
        :src="work.cover"
      />
    </div>
  </div>
</template>
