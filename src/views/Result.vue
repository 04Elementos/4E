<script setup>
import { initResultado } from "@/composables/useResult";

import BannerResult from "@/components/result/BannerResult.vue";
import SpectrumResult from "@/components/result/SpectrumResult.vue";
import DescriptionResult from "@/components/result/DescriptionResult.vue";

initResultado();
</script>

<template>
  <div class="container">
    <BannerResult />
    <SpectrumResult />
    <DescriptionResult />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.6rem;
}

@media only screen and (max-width: 480px) {
  .container {
    font-size: 1.45rem;
  }
}
</style>