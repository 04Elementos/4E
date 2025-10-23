<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { setBackground } from '@/utils/setBackgrounds'

import Checkbox from "@/components/Checkbox.vue";

const { tm } = useI18n()
const w = computed(() => tm('warning') || {})

setBackground('warning')
</script>

<template>
  <router-link class="back-btn" to="/">
    {{ w.back }}
  </router-link>

  <div class="container">
    <p v-html="w.desc_1"></p>
    <p v-html="w.desc_2"></p>
    <p v-html="w.desc_3"></p>
    <p v-html="w.desc_4"></p>

    <Checkbox />
  </div>
</template>

<style scoped>
:v-deep .rt-a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: 37%;
  padding: 35px;
  margin: auto;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.549);
  box-sizing: border-box;
  overflow-y: auto;
  text-align: center;
  font-size: 1.65rem;
  text-align: justify;
}

p{
  padding-bottom: 20px;
}

.back-btn {
  font-size: 1.9rem;
  position: relative;
  width: 140px;
  margin: 20px 0px 10px 85px;
  text-decoration: none;
}

.back-btn:hover {
  color: rgba(78, 194, 6, 0.7);
  cursor: pointer;
}

@media only screen and (max-width: 1500px) {
  .container {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    width: 60%;
    font-size: 1.5rem;
  }

  .back-btn {
    font-size: 1.75rem;
    margin: 20px 0px 10px 85px;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    width: 70%;
    font-size: 1.25rem;
  }

  .back-btn {
    margin: 10px 0px 0px 20px;
  }
}

@media only screen and (max-width: 480px) {
  .container {
    width: 90%;
    padding: 25px;
    font-size: 1.3rem;
  }

  .back-btn {
    font-size: 1.65rem;
    margin: 10px 0px 0px 15px;
  }
}
</style>
