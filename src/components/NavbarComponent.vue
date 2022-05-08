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
      color: black;
      text-decoration: none;
      margin: 10px;
      color: var(--text-color);
      opacity: 0.5;
      transition: opacity 0.4s, color 0.4s;
    }
    a.router-link-exact-active {
      opacity: 1;
    }
    a:hover {
      color: green;
    }
  }
  h1 {
    margin: 10px;
  }
}
</style>
