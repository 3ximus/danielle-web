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
  cursor: pointer;
  outline: inherit;
  position: relative;
  background: none;
  font: inherit;
  color: var(--text-color);
  padding: 5px 10px;
  border: 2px solid var(--text-color);
  min-width: 100px;
  transition: all 0.3s ease-out;
  font-family: LemonMilk;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    width: 100%;
    background-color: var(--accent-color);
    transition: all 0.2s 0.02s ease-out;
  }
  &:hover {
    border-radius: 10px;
  }
  &:hover::before {
    height: 100%;
  }
  &-label {
    position: relative;
    z-index: 1;
  }
}
</style>
