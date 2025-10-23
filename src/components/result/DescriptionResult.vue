<script setup>
import { useI18n } from "vue-i18n";
import { keyElement } from "@/composables/useResult";

import ContainerBorder from "@/components/ContainerBorder.vue";

const { t } = useI18n();
</script>

<template>
  <h6>
    {{ t('result.description') }}
  </h6>
  <div class="description">
    <ContainerBorder />
    <p v-html="t(`elements.${keyElement}.description`)"></p>
  </div>
</template>

<style scoped>
.description {
  width: 30%;
  position: relative;
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 25px;
  border: var(--border-default);
  background: #000000e3;
}

h6 {
  margin-bottom: 10px;
  font-size: 1.6rem;
}

@media only screen and (max-width: 1400px) {
  .description {
    width: 37%;
  }
}

@media only screen and (max-width: 1280px) {
  .description {
    width: 44%;
  }
}

@media only screen and (max-width: 992px) {
  .description {
    width: 55%;
  }
}

@media only screen and (max-width: 480px) {
  .description {
    width: 90%;
    padding: 7px;
  }
  h6{
    font-size: 1.4rem;
  }
}
</style>
