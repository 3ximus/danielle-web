<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array<String>
  },
});
</script>

<template>
  <div class="images">
    <img v-for="image in images" :src="image" alt="" />
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
    }

</style>
