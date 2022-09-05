<script setup lang="ts">
import type { PopSign } from "../works";
defineProps({
  sign: {
    type: Object as () => PopSign,
    required: true,
  },
  flash: Boolean,
});
</script>

<template>
  <div class="pop">
    <div class="pop-container">
      <img :src="flash ? sign.flash_cutout.low : sign.cutout.low" :alt="sign.work.name" />
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
