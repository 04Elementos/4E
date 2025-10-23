<script setup>
import { useI18n } from "vue-i18n";
import { next, prev } from "@/utils/questions/questionLogic";

const { t } = useI18n();
</script>

<template>
  <button @click="next(2)">
    {{ t('quiz.agree_st') }}
  </button>
  <br />
  <button @click="next(1)">
    {{ t('quiz.agree') }}
  </button>
  <br />
  <button @click="next(0)">
    {{ t('quiz.neutral') }}
  </button>
  <br />
  <button @click="next(-1)">
    {{ t('quiz.disagree') }}
  </button>
  <br />
  <button @click="next(-2)">
    {{ t('quiz.disagree_st') }}
  </button>
  <br />

  <button class="previous" @click="prev">
    {{ t('quiz.back') }}
  </button>
</template>

<style scoped>
button {
  background: #000000af;
  border: var(--border-default);
  width: 400px;
  padding: 10px 28px;
  text-align: center;
  display: inline-block;
  font-size: 1.4rem;
  margin: 6px;
  cursor: pointer;
}

button:hover {
  background-color: var(--border-bg-hover);
  color: #000;
}

button:active {
  background-color: #fff;
  color: #000;
}

.previous {
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .previous {
    margin-top: 20px;
  }

  button {
    width: 90%;
    padding: 10px 28px;
    font-size: 1rem;
    margin: 7px;
  }
}
</style>
