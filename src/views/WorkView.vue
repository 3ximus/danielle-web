<script setup lang="ts">
import BackButtonComponent from "@/components/buttons/BackButton.vue";
import ButtonComponent from "@/components/buttons/ButtonComponent.vue";
import WorkCoverComponent from "@/components/WorkCoverComponent.vue";
import router from "@/router";
import type { Work } from "@/config/works";
import { gallery } from "@/config/gallery";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount } from "vue";

const selectedWork: Work = gallery
  .map((s) => s.works)
  .flat()
  .find((w) => w.slug === useRoute().params.slug)!;

const dismiss = () => router.back();

function keydown_dismiss(event: KeyboardEvent) {
  if (event.key === "Escape") dismiss();
}
onBeforeMount(() => {
  if (!selectedWork) dismiss();
  document.addEventListener("keydown", keydown_dismiss);
});
onBeforeUnmount(() => document.removeEventListener("keydown", keydown_dismiss));
</script>

<template>
  <div class="work-modal">
    <BackButtonComponent @click="dismiss" />
    <div class="modal-content">
      <h1 class="title">{{ selectedWork.name }}</h1>
      <div class="container">
        <WorkCoverComponent
          :cover-image="selectedWork.cover"
          :sold="selectedWork.sold"
        />
        <hr />
        <div class="description">
          <p class="details">{{ selectedWork.year }}</p>
          <p class="details">{{ selectedWork.dimensions }}</p>
          <p class="details">{{ selectedWork.medium }}</p>
          <p class="statement" v-for="statement in selectedWork.statements">
            {{ statement }}
          </p>
        </div>
      </div>

      <RouterLink to="/gallery">
        <ButtonComponent>Go to Gallery</ButtonComponent>
      </RouterLink>
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
  background-color: var(--background-color);
  z-index: 200;

  .modal-content {
    /* min-height: 100%; */
    padding: 5%;
    height: 100%;
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
      .description {
        width: 50%;
        .details {
          color: grey;
          font-size: 1.3rem;
          margin: 4px;
          margin-left: 0;
        }
        .statement {
          line-height: 1.5;
          font-size: 16px;
        }
      }
    }
    /* force button to center */
    .dr-button {
      position: relative;
      left: 50%;
      translate: -50%;
      margin-top: 50px;
    }
  }
}

@media (max-width: 800px) {
  .work-modal {
    .modal-content {
      padding-top: 70px;
      .title {
        font-size: 20px;
        margin-bottom: 30px;
        letter-spacing: 2px;
      }
      .container {
        flex-direction: column;
        height: fit-content;
        hr {
          display: none;
        }
        .description {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
