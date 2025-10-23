import { watchEffect } from "vue";
import { useRoute } from "vue-router";

import { useAnfitriaoPopup } from "@/utils/anfitriaoPopup";

export function useThemes() {
  const route = useRoute();
  const root = document.documentElement;

  const { spawnAnfitriao } = useAnfitriaoPopup();

  // Ele observa a Rota e caso algumas das possibilidades estajam na rota e aplica
  

  watchEffect(() => {
    const query = route.query;

    if ("classica" in query) {
      root.style.setProperty("--border-default", "var(--border-classic)");
      root.style.setProperty(
        "--border-2px-default",
        "var(--border-bottom-classic)"
      );
      root.style.setProperty(
        "--font-family-default",
        "var(--font-family-classic)"
      );
      root.style.setProperty("--font-size-default", "var(--font-size-classic)");
    } else if ("comic sans" in query) {
      root.style.setProperty("--color-default", "var(--color-comic-sans)");
      root.style.setProperty(
        "--font-family-default",
        "var(--font-family-comic-sans)"
      );
      root.style.setProperty("--font-size-default", "var(--font-size-extras)");
    } else if ("72 horas" in query) {
      root.style.setProperty(
        "--font-family-default",
        "var(--font-family-trakoll)"
      );
      root.style.setProperty("--font-size-default", "var(--font-size-extras)");
    } else if ("tudo sao sinais" in query) {
      root.style.setProperty(
        "--font-family-default",
        "var(--font-family-estrangeiro)"
      );
      root.style.setProperty("--font-size-default", "var(--font-size-extras)");
    }

    if ("anfitriao" in query) {
      spawnAnfitriao(20);
    }
  });
}
