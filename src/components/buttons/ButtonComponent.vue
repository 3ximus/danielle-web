<script setup lang="ts">
defineProps({
  type: {
    type: null, // ignore type checking
    default: "button",
  },
});
</script>

<template>
  <button class="dr-button" :type="type">
    <span class="dr-button-label">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
.dr-button {
  font: inherit;
  font-family: LemonMilk;
  cursor: pointer;
  color: white;
  min-width: 100px;
  padding: 5px 10px;
  margin-top: 30px;
  border: 2px solid white;
  border-radius: 6px;
  background: var(--green-sign-color);
  outline: 2px solid var(--green-sign-color);
  transition: transform 0.3s , filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(4px 10px 10px #888);
  }
  &-label {
    position: relative;
    z-index: 1;
  }
}

@media (max-width: 800px) {
  .dr-button {
    position: relative;
    left: 50%;
    translate: -50%;
  }
}
</style>
