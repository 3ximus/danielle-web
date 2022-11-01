<template>
  <div class="scroll-arrow">
    <img src="@/assets/down.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
$pop_duration: 0.3s;
.scroll-arrow {
  position: absolute;
  bottom: 30px;
  left: calc(50% - 20px);
  border-radius: 5px;
  border: solid 3px transparent;
  outline: 2px solid transparent;
  cursor: pointer;
  height: 50px;
  width: 50px;
  transform: rotate(45deg);
  transition: all $pop_duration ease-out;
  &:after {
    content: "scroll";
    font-family: LemonMilk;
    letter-spacing: 3px;
    position: absolute;
    transform: rotate(-45deg);
    top: -50px;
    left: 50px;
    opacity: 0;
    transition: opacity $pop_duration ease-out;
  }
  &:hover {
    scale: 1.1;
    background: var(--yellow-sign-color);
    border: solid 3px black;
    outline: 2px solid var(--yellow-sign-color);
    animation: wiggle $pop_duration ease-in forwards;
    &:after {
      opacity: 1;
      transition: opacity $pop_duration $pop_duration ease-out;
    }
  }
  img {
    width: 30px;
    padding: 10px;
  }
}

@media (max-width: 800px) {
  .scroll-arrow {
    display: none;
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(45deg);
  }
  20% {
    transform: rotate(45deg);
  }
  60% {
    transform: rotate(60deg);
  }
  80% {
    transform: rotate(30deg);
  }
  90% {
    transform: rotate(50deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
</style>
