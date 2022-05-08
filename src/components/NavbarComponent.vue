<script lang="ts">
export default {};
</script>

<template>
  <div class="navbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/works">Works</RouterLink>
    </nav>
    <h1>Danielle Romaine</h1>
  </div>
</template>

<style scope lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: LemonMilk;
  padding: 20px;
  nav {
    display: inherit;
    a {
      position: relative;
      color: black;
      text-decoration: none;
      margin: 10px;
      color: var(--text-color);
      opacity: 0.5;
      transition: all 0.4s;
      &:hover {
        color: var(--accent-color);
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
        &:hover {
          background-color: var(--accent-color);
        }
      }
    }
  }
  h1 {
    margin: 10px;
  }
}
</style>
