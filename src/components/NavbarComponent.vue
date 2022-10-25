<script setup lang="ts">
import { store } from "@/store";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const atHome = computed(() =>
  ["home", "work-home"].includes(useRoute().name?.toString() || "")
);
let scrolled = ref(false);

window.addEventListener("scroll", () => {
  scrolled.value = window.scrollY > 100;
});
</script>

<template>
  <header
    class="navbar"
    :scrolled="scrolled"
    :flash-on="store.isFlashOn"
    :at-home="atHome"
  >
    <h1>DANIELLE ROMAINE</h1>
    <h2>Fine Artist</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scope lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: fit-content;
  font-family: LemonMilk;
  padding: 25px;
  color: var(--text-color);
  background-color: transparent;
  transition: background-color 1s;
  &[at-home="false"] {
    background-color: var(--background-color);
  }
  &[flash-on="true"] {
    --text-color: var(--text-dark-theme);
  }
  nav {
    display: inherit;
    a {
      position: relative;
      text-decoration: none;
      color: var(--text-color);
      margin-right: 10px;
      margin-left: 2px;
      opacity: 0.5;
      transition: all 0.4s;
      &:hover {
        opacity: 1;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: var(--text-color);
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: all 0.2s;
      }
    }
    a.router-link-exact-active {
      opacity: 1;
      &::before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
  h1 {
    margin: 0;
    margin-bottom: 5px;
    white-space: nowrap;
    transition: color 0.4s;
    font-family: HighwayGothic;
    font-size: var(--fs-title);
    letter-spacing: 2px;
  }
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: var(--fs-text);
    opacity: 0.5;
    transition: color 0.4s;
  }
  &[scrolled="true"] {
    h2 {
      opacity: 0;
    }
  }
}

@media (max-width: 800px) {
  .navbar {
    width: 97%;
    padding: 10px 0 10px 10px;
  }
}
</style>
