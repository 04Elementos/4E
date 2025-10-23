<script setup>
import { useI18n } from "vue-i18n";
import { Name, keyElement } from "@/composables/useResult";
import { imageElement } from "@/composables/useUIAssets";

const { t } = useI18n();
</script>

<template>
  <div class="banner">
    <p >
      {{ t('result.greeting', { name: Name }) }}
    </p>

    <p v-html="t(`elements.${keyElement}.affinity`)"></p>
    <a href="https://ordemparanormal.fandom.com/wiki/Elementos_do_Outro_Lado">
      <img :src="imageElement" />
    </a>
    <p v-html="t(`elements.${keyElement}.phrase`)"></p>
  </div>
</template>

<style scoped>
.banner {
  width: 25%;
  height: auto;
  margin: auto;
  margin-bottom: 10px;
  position: relative;
}

img {
  max-width: 100%;
  width: 325px;
  height: auto;
}

@media only screen and (max-width: 1400px) {
  .banner {
    width: 37%;
  }
}

@media only screen and (max-width: 1280px) {
  .banner {
    width: 44%;
  }
}

@media only screen and (max-width: 992px) {
  .banner {
    width: 55%;
  }
}

@media only screen and (max-width: 480px) {
  .banner {
    width: 70%;
  }
}
</style>