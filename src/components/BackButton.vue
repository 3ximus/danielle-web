<template>
  <div class="back-button">
    <img src="@/assets/back.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
$sign_color: #d99522;
.back-button {
  position: absolute;
  left: 4%;
  top: 3%;
  border-radius: 5px;
  border: solid 3px transparent;
  outline: 2px solid transparent;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: rotate(45deg) scale(1.1);
    background: $sign_color;
    border: solid 3px black;
    outline: 2px solid $sign_color;
  }
  img {
    width: 34px;
    padding: 8px;
  }
}
</style>
