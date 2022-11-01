<script setup lang="ts">
import { store } from "@/store";
import { computed, onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useRoute } from "vue-router";
const atHome = computed(() => useRoute().name?.toString().endsWith("home"));
let scrolled = ref(false);

const setScrolled = () => (scrolled.value = window.scrollY > 100);
onBeforeMount(() => window.addEventListener("scroll", setScrolled));
onBeforeUnmount(() => window.removeEventListener("scroll", setScrolled));
</script>

<template>
  <header
    class="navbar"
    :scrolled="scrolled"
    :flash-on="store.isFlashOn"
    :at-home="atHome"
  >
    <div class="row">
      <h1>DANIELLE ROMAINE</h1>
      <hr />
      <h2>Fine Artist</h2>
    </div>
    <div class="row spaced">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <h3 v-if="useRoute().name === 'gallery'">
        {{ store.galleryCollectionName }}
      </h3>
    </div>
  </header>
</template>

<style scope lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: LemonMilk;
  letter-spacing: 1px;
  padding: 25px;
  color: var(--text-color);
  background-color: transparent;
  transition: background-color 1s, filter 0.6s;
  &[at-home="true"] {
    filter: none !important;
  }
  &[scrolled="true"] {
    filter: drop-shadow(0px 0px 15px #444);
  }
  &[at-home="false"] {
    background-color: var(--background-color);
  }
  &[flash-on="true"] {
    --text-color: var(--text-dark-theme);
  }
  .row {
    display: flex;
    flex-direction: row;
    &.spaced {
      justify-content: space-between;
      min-height: 25px;
    }
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
    white-space: nowrap;
    transition: color 0.4s;
    font-family: HighwayGothic;
    font-size: var(--fs-title);
    letter-spacing: 3px;
  }
  h2 {
    font-size: var(--fs-text);
    opacity: 0.5;
    letter-spacing: 5px;
    transition: color 0.4s, height 0.4s, opacity 0.4s, margin 0.4s;
    height: 25px;
  }
  h3 {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
  }
  hr {
    height: 5px;
    width: 5px;
    background: black;
    opacity: 0.5;
    border: none;
    border-radius: 5px;
    margin: auto 22px auto 22px;
  }
}

@media (max-width: 800px) {
  .navbar {
    width: 97%;
    padding: 10px 0 10px 10px;
    .row {
      flex-direction: column;
      h2 {
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 1px;
      }
      h3 {
        margin-top: 10px;
        font-size: 12px;
        align-self: center;
      }
      hr {
        display: none;
      }
    }

    &[scrolled="false"] {
      h3 {
        display: none;
      }
    }
    &[scrolled="true"] {
      h2 {
        height: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        opacity: 0;
      }
    }
  }
}
</style>
