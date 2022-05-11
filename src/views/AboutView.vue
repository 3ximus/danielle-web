<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="about">
    <h2>ABOUT ME</h2>

    <p>Hello, my name is Danielle</p>

    After studying Fine Arts and Chinese in New Jersey until 21, I decided to
    branch out and finish my BFA at Concordia University in Montreal
    (Tiohti:áke) in 2020. Since then, this has led me to flourish and create
    much more art that is reflective of my own experiences and emotions.
    Personal undertones are a large part of my artworks, however, many carry
    other meanings if one can't identify themselves with my experiences. If
    you'd like to get in touch with questions, don't hesitate to reach out!
    <br />
    <br />

    <RouterLink to="contact">
      <ButtonComponent>Get in touch</ButtonComponent>
    </RouterLink>
  </div>

  <img
    class="back-img"
    src="/artwork/feminine_studies/58.webp"
    onload="this.style.opacity=1"
  />
</template>

<style scoped lang="scss">
.about {
  max-width: 800px;
  text-align: center;
  line-height: 2em;
}

.back-img {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  height: 80%;
  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  opacity: 0;
  transition: opacity 1s;
}
</style>
