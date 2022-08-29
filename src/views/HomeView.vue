<script setup lang="ts">
import LightSwitchComponent from "@/components/LightSwitchComponent.vue";
import type { PopSign } from "@/components/PopSignComponent.vue";
import PopSignComponent from "@/components/PopSignComponent.vue";
import { store } from "@/store";

// TODO for compressing pictures:
// convert original.png -resize 2000000@> -quality 80 compressed.webp
const grid: PopSign[][] = [
  [
    // 1st row
    {
      image: "/pomegranates_botticelli/caution_bump.png",
      flash: "/pomegranates_botticelli/caution_bump.png",
    },
    {
      image: "/fallen_angel/2.png",
      flash: "/fallen_angel/1.png",
    },
    {
      image: "/helios_selene/selene.png",
      flash: "/helios_selene/selene.png",
    },
  ],
  [
    // 2nd row
    {
      image: "/si_tian_wang/si_tian_wang.png",
      flash: "/si_tian_wang/si_tian_wang.png",
    },
    { image: "/stop_horny/7.png", flash: "/stop_horny/7.png" },
    {
      image: "/twilight_zone/Twilight Zone.png",
      flash: "/twilight_zone/Twilight Zone.png",
    },
  ],
  [
    // 3rd row
    {
      image: "/litter_ahead_lilith/Lilith.png",
      flash: "/litter_ahead_lilith/Lilith.png",
    },
    {
      image: "/helios_selene/helios.png",
      flash: "/helios_selene/helios.png",
    },
    {
      image: "/helios_selene/selene.png",
      flash: "/helios_selene/selene.png",
    },
    {
      image: "/pomegranates_botticelli/caution_bump.png",
      flash: "/pomegranates_botticelli/caution_bump.png",
    },
  ],
  [
    // 4th row
    {
      image: "/twilight_zone/Twilight Zone.png",
      flash: "/twilight_zone/Twilight Zone.png",
    },
    {
      image: "/fallen_angel/2.png",
      flash: "/fallen_angel/1.png",
    },
    { image: "/stop_horny/7.png", flash: "/stop_horny/7.png" },
  ],
  [
    // 5th row
    {
      image: "/pomegranates_botticelli/caution_bump.png",
      flash: "/pomegranates_botticelli/caution_bump.png",
    },
    {
      image: "/si_tian_wang/si_tian_wang.png",
      flash: "/si_tian_wang/si_tian_wang.png",
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
$skew-effect: 5vw;
$left-offset: 40px;
$switch-position: 50px;

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
  transition: background-color 0.4s ease-out;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-dark-color);
    transition: clip-path .5s ease-out;
    clip-path: circle(0% at calc(100% - 80px) calc(100% - 60px));
  }
  &[flash-on="true"] {
    // dark background animation
    &:before {
      clip-path: circle(
        150% at calc(100% - $switch-position) calc(100% - $switch-position)
      );
    }
  }
  .container {
    transform: rotate(45deg);
    backface-visibility: hidden;
    width: 50vw;
  }
}

.row {
  position: relative;
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  &:nth-child(1) {
    left: calc($skew-effect * 2);
  }
  &:nth-child(2) {
    left: $skew-effect;
  }
  &:nth-child(4) {
    left: -$skew-effect;
  }
  &:nth-child(5) {
    left: calc($skew-effect * -2);
  }
}

.switch {
  position: absolute;
  bottom: $switch-position;
  right: $switch-position;
  z-index: 100;
}
</style>
