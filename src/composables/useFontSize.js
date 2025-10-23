import { watch } from "vue";
import { useI18n } from "vue-i18n";

export function useFontSize() {
  const { locale } = useI18n();
  const root = document.documentElement;

  const apply = (lang) => {
    if (lang === "ru") {
      root.style.setProperty("--font-size-default", "var(--font-size-ru)");
    }
    else if (lang === "ja") {
      root.style.setProperty("--font-size-default", "var(--font-size-ja)");
    }
    else {
      root.style.removeProperty("--font-size-default");
    }
  };

  watch(
    () => locale.value,
    (newLocale) => {
      apply(newLocale);
    },
    { immediate: true, flush: "sync" }
  );
}
