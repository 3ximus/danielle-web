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
  background: var(--green-sign-color);
  border-radius: 6px;
  outline: none;
  border: none;
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(4px 5px 10px #888);
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
