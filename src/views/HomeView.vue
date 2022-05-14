<script setup lang="ts">
import SliderComponent from "@/components/SliderComponent.vue";
</script>

<template>
  <SliderComponent :slides="slides"></SliderComponent>
</template>

<script lang="ts">
export default {
  data() {
    return {
      slides: [
        { cover: "/artwork/media_and_sexuality/72.webp", title: "PORRA" },
        { cover: "/artwork/bavarian_lion_shield/53.webp", title: "CARALHO" },
        { cover: "/artwork/male_study/57.webp", title: "TEST" },
        { cover: "/artwork/pomegranates_botticelli/85.webp", title: "" },
        { cover: "/artwork/litter_ahed_lilith/35.webp", title: "" },
        { cover: "/artwork/stop_no_hare/83.webp", title: "NO" },
        { cover: "/artwork/stop_horny/11.webp", title: "SIM" },
        { cover: "/artwork/finding_self/19.webp", title: "POOP" },
        { cover: "/artwork/duo_wen_tian_wang/39.webp", title: "" },
        { cover: "/artwork/fallen_angel/80.webp", title: "" },
      ],
    };
  },
};
</script>
