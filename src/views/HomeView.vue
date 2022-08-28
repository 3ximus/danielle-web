<script setup lang="ts">
import PopSignComponent from "@/components/PopSignComponent.vue";
import type { PopSign } from "@/components/PopSignComponent.vue";

const grid: PopSign[][] = [
  [
    {
      image: "/artwork/pomegranates_botticelli/caution_bump.png",
      flash: "/artwork/pomegranates_botticelli/caution_bump.png",
    },
    { image: "/artwork/stop_horny/7.png", flash: "/artwork/stop_horny/7.png" },
  ],
  [
    {
      image: "/artwork/litter_ahead_lilith/Lilith.png",
      flash: "/artwork/litter_ahead_lilith/Lilith.png",
    },
    {
      image: "/artwork/helios_selene/helios.png",
      flash: "/artwork/helios_selene/helios.png",
    },
    {
      image: "/artwork/helios_selene/selene.png",
      flash: "/artwork/helios_selene/selene.png",
    },
  ],
  [
    {
      image: "/artwork/si_tian_wang/si_tian_wang.png",
      flash: "/artwork/si_tian_wang/si_tian_wang.png",
    },
    {
      image: "/artwork/fallen_angel/as_above_so_below.png",
      flash: "/artwork/fallen_angel/as_above_so_below.png",
    },
  ],
];
</script>

<template>
  <div class="valign">
    <div class="container">
      <div
        class="row"
        v-for="(row, index) in grid"
        :class="'row' + (index - Math.floor(grid.length / 2))"
      >
        <PopSignComponent v-for="sign in row" :sign="sign" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.valign {
  position: absolute;
  top: 0;
  left: 0;
  // subtract padding
  width: calc(100vw - 40px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: 40px;
  z-index: 1;
  .container {
    rotate: 45deg;
  }
}
.row {
  position: relative;
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &-1 {
    left: 10vw;
  }
  &1 {
    left: -10vw;
  }
}
</style>
