<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import type { PopSign } from "@/components/PopSignComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";

// TODO for compressing pictures:
// convert original.png -resize 2000000@> -quality 80 compressed.webp
const grid: PopSign[][] = [
  [
    {
      image: "/artwork/si_tian_wang/si_tian_wang.png",
      flash: "/artwork/si_tian_wang/si_tian_wang.png",
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
    {
      image: "/artwork/pomegranates_botticelli/caution_bump.png",
      flash: "/artwork/pomegranates_botticelli/caution_bump.png",
    },
    
  ],
  [
  
    {
      image: "/artwork/twilight_zone/Twilight Zone.png",
      flash: "/artwork/twilight_zone/Twilight Zone.png",
    },
    {
      image: "/artwork/fallen_angel/2.png",
      flash: "/artwork/fallen_angel/1.png",
    },
  ],
];
</script>

<template>
  <div>
    <div class="valign" :flash-on="store.isFlashOn">
      <div class="container">
        <div class="row" v-for="row in grid">
          <PopSignComponent v-for="sign in row" :sign="sign" />
        </div>
      </div>
    </div>

    <LightSwitchComponent />
  </div>
</template>

<style scoped lang="scss">
$skew-effect: 10vw;
$left-offset: 40px;

.valign {
  position: absolute;
  top: 0;
  left: 0;
  // subtract padding
  width: calc(100vw - $left-offset);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: $left-offset;
  background-color: var(--background-color);
  transition: background-color 1s ease-out;
  clip-path: circle(80px at 50% 50%);
  &[flash-on="true"] {
    --background-color: var(--background-dark-color);
  }
  z-index: 1;
  .container {
    transform: rotate(45deg);
  }
}

.row {
  position: relative;
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  --skew--effect: 15vw;
  &:nth-child(1) {
    left: $skew-effect;
  }
  &:nth-child(3) {
    left: -$skew-effect;
  }
}

.switch {
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 100;
}
</style>
