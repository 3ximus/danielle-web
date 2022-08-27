<script setup lang="ts">
export declare interface PopSign {
  image: string;
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
    <img :src="sign.image" :alt="sign.image"/>
  </div>
</template>

<style scoped lang="scss">
.pop {
  width: 450px;
  height: 450px;
  cursor: pointer;
  padding: 20px;
  transition: 0.3s cubic-bezier(1, 0, 0.2, 1);
  img {
    height: 100%;
    filter: drop-shadow(4px 6px 10px #333);
    transition: 0.3s cubic-bezier(1, 0, 0.2, 1);
    &:hover {
      scale: 1.04;
      filter: drop-shadow(15px 30px 25px #444);
    }
  }
}
</style>
