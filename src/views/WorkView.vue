<script setup lang="ts">
import BackButton from "@/components/buttons/BackButton.vue";
import ScrollButton from "@/components/buttons/ScrollButton.vue";
import router from "@/router";
import type { Work } from "@/works";
import { gallery } from "@/views/gallery";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

const selectedWork: Work = gallery
  .map((s) => s.works)
  .flat()
  .find((w) => w.slug === useRoute().params.slug);

const images = ref<HTMLInputElement | null>(null);

const dismiss = () => router.back();

function keydown_dismiss(event: KeyboardEvent) {
  if (event.key === "Escape") dismiss();
}

onBeforeMount(() => {
  if (!selectedWork) dismiss();
  document.addEventListener("keydown", keydown_dismiss);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", keydown_dismiss);
});
</script>

<template>
  <div class="work-modal">
    <BackButton @click="dismiss" />
    <div class="modal-content">
      <h1 class="title">{{ selectedWork.name }}</h1>
      <div class="container">
        <div class="cover-image">
          <img
            :src="selectedWork.cover"
            alt=""
            onload="this.style.transform = 'scale(1)'"
          />
        </div>
        <hr />
        <div class="description">
          <p class="details">{{ selectedWork.year }}</p>
          <p class="details">{{ selectedWork.dimensions }}</p>
          <p class="details">{{ selectedWork.media }}</p>
          <p class="statement" v-for="statement in selectedWork.statements">
            {{ statement }}
          </p>
        </div>
      </div>
      <div class="images" ref="images">
        <img v-for="image in selectedWork.images" :src="image" alt="" />
      </div>
    </div>
    <ScrollButton @click="images?.scrollIntoView({ behavior: 'smooth' })" />
  </div>
</template>

<style scoped lang="scss">
$title: clamp(10px, 10vw, 40px);

.work-modal {
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
    .container {
      display: flex;
      flex-direction: row;
      gap: 3%;
      height: 65vh;
      .cover-image {
        width: fit-content;
        max-width: 50%;
        text-align: center;
        img {
          width: 100%;
          max-height: 100%;
          transform: scale(1.5);
          transition: 0.5s;
          object-fit: contain;
        }
      }
      .description {
        width: 50%;
        .details {
          color: grey;
          font-size: 1.3rem;
          margin: 4px;
          margin-left: 0;
        }
        .statement {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          font-size: 16px;
        }
      }
    }
    .images {
      margin-top: 300px;
      height: 300px;
      img {
        height: 100%;
      }
    }
  }
}
</style>
