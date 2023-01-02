<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array<String>
  },
});

const fullscreenImage = ref("");

function showFullscreen(image:string) {
  fullscreenImage.value = image;
}

function dismissFullscreen() {
  fullscreenImage.value = '';
}
</script>

<template>
  <div class="image-container">
    <div class="images">
      <img
        v-for="image in images"
        :src="image"
        @click="showFullscreen(image)"
      />
    </div>

    <Transition name="fade">
      <div
        class="fullscreen"
        v-if="fullscreenImage != ''"
        @click="dismissFullscreen()"
      >
        <img :src="fullscreenImage" class="fullscreen" />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.images {
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  img {
    max-height: 300px;
    height: 100%;
    object-fit: contain;
    transition: 0.3s cubic-bezier(1, 0, 0.2, 1);
    cursor: pointer;
    &:hover {
      scale: 1.04;
    }
  }
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #ffffffaa;
  img {
    object-fit: contain;
    padding-top: 5vh;
    height: 90vh;
  }
}

@media (max-width: 800px) {
  .images {
    margin-top: 20px;
    flex-direction: column;
    flex-wrap: unset;
    img {
      min-width: 100%;
      height: unset;
      max-height: unset;
    }
  }
  .fullscreen {
    img {
      max-width: 95vw;
      padding-left: 2.5vw;
    }
  }
}
</style>
