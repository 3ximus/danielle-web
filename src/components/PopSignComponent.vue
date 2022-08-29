<script setup lang="ts">
import { store } from "@/store";
export declare interface PopSign {
  image: string;
  flash: string;
}
defineProps({
  sign: {
    type: Object as () => PopSign,
    required: true,
  },
});
</script>

<template>
  <div class="pop">
    <div class="pop-container">
      <img :src="store.isFlashOn ? sign.flash : sign.image" :alt="sign.image" />
      <img :src="store.isFlashOn ? sign.flash : sign.image" :alt="sign.image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pop {
  //width: 300px;
  height: 40vh;
  cursor: pointer;
  padding: 20px;
  transition: 0.3s cubic-bezier(1, 0, 0.2, 1);
  &-container {
    height: 100%;
    filter: drop-shadow(4px 6px 10px #333);
    transition: 0.3s cubic-bezier(1, 0, 0.2, 1);
    &:hover {
      scale: 1.04;
      filter: drop-shadow(15px 30px 25px #444);
    }
    img {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
}
</style>
