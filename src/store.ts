import { reactive } from "vue";

export const store = reactive({
  // Flash
  isFlashOn: false,
  flashOn() {
    this.isFlashOn = true;
  },
  flashOff() {
    this.isFlashOn = false;
  },

  // gallery current collection
  galleryCollectionName: "",
  setGalleryCollection(name: string) {
    this.galleryCollectionName = name;
  },
});
