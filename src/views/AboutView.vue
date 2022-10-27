<script setup lang="ts">
import ButtonComponent from "@/components/buttons/ButtonComponent.vue";
</script>

<template>
  <section class="about">
    <h2>ABOUT ME</h2>
    <img src="/us.png" alt="">
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
