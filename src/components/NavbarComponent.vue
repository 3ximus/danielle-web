<template>
  <header class="navbar">
    <h1>Danielle Romaine</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="gallery">Gallery</RouterLink>
      <RouterLink to="about">About</RouterLink>
      <RouterLink to="contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scope lang="scss">
.navbar {
  position: relative;
  z-index: 100;
  font-family: LemonMilk;
  padding: 20px 20px 0 20px;
  nav {
    display: inherit;
    a {
      position: relative;
      color: black;
      text-decoration: none;
      margin-right: 10px;
      margin-left: 2px;
      color: var(--text-color);
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
    margin-bottom: 10px;
    white-space: nowrap;
  }
}
</style>
