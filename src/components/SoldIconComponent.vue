<template>
  <div class="sold"></div>
</template>

<style scoped lang="scss">
.sold {
  position: relative;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  background-color: #e60000;
  border-radius: 50%;
  &:after {
    content: "sold";
    font-family: LemonMilk;
    letter-spacing: 3px;
    position: absolute;
    top: 5px;
    left: 40px;
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  &:hover:after {
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .sold {
    position: absolute;
    right: 20px;
    &:after {
      left: unset;
      right: 40px;
    }
  }
}
</style>
