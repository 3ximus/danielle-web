<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import router from "@/router";
import type { Work } from "@/works";
import { gallery } from "@/views/gallery";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount } from "vue";

const selectedWork: Work = gallery.find(
  (i) => i.work.slug === useRoute().params.slug
)?.work!;

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
    <div class="modal-content">
      <BackButton @click="dismiss" />
      <h1 class="name">{{ selectedWork.name }}</h1>
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
      <div class="images">
        <img v-for="image in selectedWork.images" :src="image" alt="" />
      </div>
    </div>
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
    .name {
      font-family: LemonMilk;
      font-size: $title;
    }
    .container {
      display: flex;
      flex-direction: row;
      gap: 3%;
      .cover-image {
        width: 40%;
        img {
          max-width: 100%;
          height: 100%;
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
        }
      }
    }
  }
}
</style>
