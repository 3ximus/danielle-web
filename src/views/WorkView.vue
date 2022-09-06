<script setup lang="ts">
import router from "@/router";

function dismiss() {
  router.push("/gallery");
}
</script>

<template>
  <div class="work-modal" @click="dismiss">
    <h1>HELLO</h1>
  </div>
</template>

<style scoped>
.work-modal {
  width: 100%;
  height: 100%;
}
</style>
