import { reactive } from "vue";

export const store = reactive({
  isFlashOn: false,
  flashOn() {
    this.isFlashOn = true;
  },
  flashOff() {
    this.isFlashOn = false;
  },
});
