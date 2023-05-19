<script setup lang="ts">
defineProps<{
  type?: "button" | "submit" | "reset";
  status?: "waiting" | "success" | "error" | "none";
}>();
</script>

<template>
  <button class="dr-button" :type="type" :data-status="status">
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
  height: 42px;
  min-width: 100px;
  padding: 5px 10px;
  margin-top: 30px;
  background: var(--green-sign-color);
  border-radius: 6px;
  outline: none;
  border: none;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(4px 5px 10px #888);
  }
  &-label {
    z-index: 1;
  }

  &[data-status="waiting"] {
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      left: 34px;
      z-index: 3;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border-top: 4px solid white;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid transparent;
      animation: spin 0.8s ease-out infinite;
    }
    .dr-button-label {
      opacity: 0;
    }
  }

  &[data-status="success"] {
    &:after {
      content: " 🗸";
    }
  }
  &[data-status="error"] {
    background: var(--orange-sign-color);
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
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
