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
    margin: 10px;
    white-space: nowrap;
  }
}

@media (max-width: 900px) {
  .navbar {
    nav {
      display: none;
    }
    h1 {
      /* font-size: 1.8em; */
      margin: auto;
    }
  }
}
</style>
