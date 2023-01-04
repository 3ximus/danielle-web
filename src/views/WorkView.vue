<script setup lang="ts">
import BackButtonComponent from "@/components/buttons/BackButton.vue";
import ScrollButtonComponent from "@/components/buttons/ScrollButton.vue";
import ImageRowComponent from "@/components/ImageRowComponent.vue";
import SoldIconComponent from "@/components/SoldIconComponent.vue";
import router from "@/router";
import type { Work } from "@/config/works";
import { gallery } from "@/config/gallery";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import ButtonComponent from "../components/buttons/ButtonComponent.vue";

const selectedWork: Work = gallery
  .map((s) => s.works)
  .flat()
  .find((w) => w.slug === useRoute().params.slug)!;

const images = ref<InstanceType<typeof ImageRowComponent>>();
function scrollToImages() {
  images.value?.$el.scrollIntoView({ behavior: "smooth" });
}

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
        <div class="cover-image">
          <img
            :src="selectedWork.cover"
            onload="this.style.transform='scale(1)'"
          />
          <SoldIconComponent v-if="selectedWork.sold" />
        </div>
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

      <ImageRowComponent ref="images" :images="selectedWork.images" />

      <div class="container-footer">
        <RouterLink to="/gallery">
          <ButtonComponent>Go to Gallery</ButtonComponent>
        </RouterLink>
      </div>
    </div>
    <ScrollButtonComponent @click="scrollToImages" />
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

      &-footer {
        display: flex;
        justify-content: center;
        margin: 40px;
      }
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
        .cover-image {
          max-width: 100%;
        }
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
