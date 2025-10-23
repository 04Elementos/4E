<script setup>
import { useI18n } from "vue-i18n";
import { Spectrum } from "@/composables/useResult";

import ContainerBorder from "@/components/ContainerBorder.vue";

const { t } = useI18n();
</script>

<template>
  <h6>
    {{ t("result.spectrum") }}
  </h6>
  <div class="spectrum">
    <ContainerBorder />

    <div class="row">
      <h6>
        {{ t("result.death_per") }}
      </h6>
      <p class="result">{{ Spectrum[1] }}%</p>
    </div>

    <div class="row">
      <h6>{{ t("result.blood_per") }}</h6>
      <p class="result">{{ Spectrum[0] }}%</p>
    </div>

    <div class="row">
      <h6>{{ t("result.knowledge_per") }}</h6>
      <p class="result">{{ Spectrum[2] }}%</p>
    </div>

    <div class="row">
      <h6>{{ t("result.energy_per") }}</h6>
      <p class="result">{{ Spectrum[3] }}%</p>
    </div>
  </div>
</template>

<style scoped>
.spectrum {
  width: 30%;
  position: relative;
  border: var(--border-default);
  padding: 15px;
  margin: auto;
  margin-bottom: 15px;
  text-align: center;
  background: #000000e3;
}

.row {
  display: inline-block;
  padding-inline: 8px;
}

h6 {
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.result {
  font-size: 25px;
}

@media only screen and (max-width: 1400px) {
  .spectrum {
    width: 37%;
  }
}

@media only screen and (max-width: 1280px) {
  .spectrum {
    width: 44%;
  }
}

@media only screen and (max-width: 992px) {
  .spectrum {
    width: 55%;
  }
}

@media only screen and (max-width: 480px) {
  .spectrum {
    width: 90%;
    padding: 10px;
  }
  h6 {
    font-size: 1.4rem;
  }
  .row {
    padding-inline: 6px;
  }

  .result{
    font-size: 23px;
  }
}
</style>