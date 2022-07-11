<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />
  <section class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </section>
</template>

<style lang="scss">
@import "@/assets/css/base.scss";

.container {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
