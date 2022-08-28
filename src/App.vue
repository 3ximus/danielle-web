<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
@import "@/assets/css/base.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
