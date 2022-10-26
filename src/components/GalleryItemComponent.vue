<script setup lang="ts">
import router from "@/router";
import type {Work} from "@/works";

defineProps({
  item: {
    type: Object as () => Work,
    required: true,
  },
  flash: Boolean,
});
</script>

<template>
  <div class="item" @click="router.push('/gallery/' + item.slug)">
    <img :src="item.cover" />
    <div class="title">
      <h1 class="name">{{ item.name }}</h1>
      <h2 class="year">{{ item.year }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  transition: scale 0.3s ease-out;
  cursor: pointer;
  margin: 10px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    object-fit: cover;
  }

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    font-family: LemonMilk;
    transition: opacity 0.4s ease-out;
    .year {
      font-size: 17px;
      color: #222;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    transition: opacity 0.3s ease-out;
    opacity: 0;
  }
  &:hover {
    scale: 1.02;
    &:before {
      opacity: 0.7;
    }
    .title {
      opacity: 1;
    }
  }
}
</style>
