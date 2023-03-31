<script setup lang="ts">
import ButtonComponent from "@/components/buttons/ButtonComponent.vue";
import { exhibitions } from "@/config/exhibitions";
</script>

<template>
  <section class="about">
    <h2>ABOUT ME</h2>
    After studying at The College of New Jersey with a double major in Fine Arts
    and Chinese, I moved to Montréal (Tiohtiá:ke) to further pursue education at
    Concordia University with a specialization in Drawing & Painting. Now, as I
    finish my degree, I’ve found myself more inspired than before, with hopes to
    evoke emotions in viewers and reach a larger audience.

    <h2>ABOUT MY WORK</h2>

    Expressive of my own thoughts, experiences, and emotions, my art
    encapsulates many aspects of my being. Though I am the main audience I
    direct my art towards, a common theme in my work is to create a space where
    many can identify a part of themselves, while still keeping it personal and
    authentic to who I am. I’m mainly intrigued by iconography and sign usage;
    pairing old with new. The road signs are set in a new context- one that is
    no longer quickly understood by the masses. My works require knowledge in
    art history, religion, and my distinct experiences to create a unique story
    that can be known but isn’t a necessity. I wish for my audience to
    appreciate the artworks for their composition and color usage regardless of
    its concept.
    <br />

    <h2>PAST EXHIBITIONS</h2>

    <RouterLink
      v-for="exhibition in exhibitions"
      :to="'/exhibition/' + exhibition.slug"
    >
      <p class="exhibition">{{ exhibition.name }}</p>
    </RouterLink>

    <RouterLink to="contact">
      <ButtonComponent>Get in touch</ButtonComponent>
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
.about {
  line-height: 2em;
  margin: 40px;

  h2 {
    letter-spacing: 2px;
  }

  a {
    text-decoration: none;
  }

  .exhibition {
    position: relative;
    width: fit-content;
    font-family: LemonMilk;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--green-sign-color);
    margin-left: 10px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: var(--green-sign-color);
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: all 0.2s;
    }
    &:hover::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}
</style>
