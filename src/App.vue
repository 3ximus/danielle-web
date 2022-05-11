<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />
  <section class="container">
    <RouterView />
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
</style>
