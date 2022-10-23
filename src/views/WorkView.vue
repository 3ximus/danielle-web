<script setup lang="ts">
import router from "@/router";
import type { Work } from "@/works";
import { gallery } from "@/views/gallery";
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";

const props = defineProps({
  work: {
    type: Object as () => Work | undefined,
    required: true,
  },
});

function dismiss() {
  router.push("/gallery");
}

let selectedWork: Work =
  props.work ||
  gallery.find((i) => i.work.slug === useRoute().params.slug)?.work!;

onBeforeMount(() => {
  if (!selectedWork) dismiss();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") dismiss();
});
</script>

<template>
  <div class="work-modal" @click="dismiss">
    <div class="modal-content">
      <h1>{{ selectedWork.name }}</h1>
      <div class="container">
        <div class="cover-image">
          <img
            :src="selectedWork.cover"
            alt=""
            onload="this.style.transform = 'scale(1)'"
          />
        </div>
        <div class="description">
          <p v-for="statement in selectedWork.statements">{{ statement }}</p>
        </div>
      </div>
      <div class="images">
        <img v-for="image in selectedWork.images" :src="image" alt="" />
      </div>
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
  overflow-y: scroll;
  z-index: 200;
  .modal-content {
    min-height: 100%;
    padding: 5%;
    background-color: var(--background-color);
    h1 {
      font-family: LemonMilk;
    }
    .container {
      display: flex;
      flex-direction: row;
      .cover-image {
        width: 50%;
        padding: 20px;
        img {
          max-width: 100%;
          transform: scale(1.5);
          transition: 0.5s;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
