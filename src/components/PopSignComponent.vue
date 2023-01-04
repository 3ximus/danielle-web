<script setup lang="ts">
import type { PopSign } from "@/config/works";
import { gallery } from "@/config/gallery";
import { computed } from "vue";

const props = defineProps({
  sign: {
    type: Object as () => PopSign,
    required: true,
  },
  flash: Boolean,
});

const routeLink = computed(() =>
  gallery
    .map((s) => s.works)
    .flat()
    .find((w) => w.slug === props.sign.work.slug)
    ? "/work/" + props.sign.work.slug
    : ""
);
</script>

<template>
  <div class="pop">
    <RouterLink :to="routeLink">
      <div class="pop-container">
        <img
          :src="flash ? sign.flash_cutout : sign.cutout"
          :alt="sign.work.name"
        />
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.pop {
  /* width: 300px; */
  height: 40vh;
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
      cursor: pointer;
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
}
</style>
