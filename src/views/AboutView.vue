<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <section class="about">
    <h2>ABOUT ME</h2>
    <br />

    <RouterLink to="contact">
      <ButtonComponent>Get in touch</ButtonComponent>
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
.about {
  max-width: 800px;
  text-align: center;
  line-height: 2em;
}
</style>
