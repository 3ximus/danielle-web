<script setup lang="ts">
import BackButtonComponent from "@/components/buttons/BackButton.vue";
import router from "@/router";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { exhibitions, type Exhibition } from "./exhibitions";
const dismiss = () => router.back();

const exhibition: Exhibition = exhibitions.find(
  (e) => e.slug === useRoute().params.slug
)!;

function keydown_dismiss(event: KeyboardEvent) {
  if (event.key === "Escape") dismiss();
}
onBeforeMount(() => {
  console.log('mounting');
  if (!exhibition) dismiss();
  document.addEventListener("keydown", keydown_dismiss);
});
onBeforeUnmount(() => document.removeEventListener("keydown", keydown_dismiss));
</script>

<template>
  <div class="exhibition-modal">
    <BackButtonComponent @click="dismiss" />
    <div class="modal-content">
      <h1 class="title">{{ exhibition.name }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
$title: clamp(10px, 10vw, 40px);

.exhibition-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 200;

  .modal-content {
    min-height: 100%;
    padding: 5%;
    background-color: var(--background-color);

    .title {
      font-family: LemonMilk;
      font-size: $title;
      letter-spacing: 3px;
      margin-bottom: 50px;
    }
  }
}
</style>
