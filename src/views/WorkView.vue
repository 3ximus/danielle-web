<script setup lang="ts">
import router from "@/router";
import type { Work } from "@/works";

defineProps({
  work: {
    type: Object as () => Work,
    required: true,
  },
});

function dismiss() {
  router.push("/gallery");
}
</script>

<template>
  <div class="work-modal" @click="dismiss">
    <div class="modal-content">
      <h1>{{ work.name }}</h1>
      <img :src="work.cover" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.8);
  .modal-content {
    width: 90%;
    height: 90%;
    margin: auto;
    margin-top: 10px;
    padding: 2%;
    background-color: var(--background-color);
    border-radius: 10px;
    font-family: LemonMilk;
    img {
      max-width: 60%;
    }
  }
}
</style>
