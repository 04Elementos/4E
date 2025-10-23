import { watch, nextTick, ref } from "vue";
import { setBackgroundElement, setBannerElement } from "@/composables/useUIAssets";

import router from "@/router/index.js";

export const Name = ref("");
export const Spectrum = ref([0, 0, 0, 0]);
export const keyElement = ref("");

export function initResultado() {
  const raw = localStorage.getItem("quizResult");

  if (!raw) {
    router.push("/");
  } else {
    const quiz = JSON.parse(raw);
    const { name, spectrum, result } = quiz;

    Name.value = name;
    Spectrum.value = spectrum;
    keyElement.value = result;
  }
  setBackgroundElement();
  setBannerElement();

  watch(keyElement, () => nextTick());
}