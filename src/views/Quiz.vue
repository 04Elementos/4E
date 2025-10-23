<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { setBackground } from "@/utils/setBackgrounds";
import { quizFinished, resetQuiz } from "@/utils/questions/questionLogic.js";

import QuestionQuiz from "@/components/quiz/QuestionQuiz.vue";
import ButtonsQuiz from "@/components/quiz/ButtonsQuiz.vue";
import EndQuiz from "@/components/quiz/EndQuiz.vue";

onBeforeRouteLeave(() => {
  resetQuiz();
});

setBackground('quiz')
</script>

<template>
  <div class="container" v-if="!quizFinished">
    <QuestionQuiz />
    <ButtonsQuiz />
  </div>

  <EndQuiz v-else />
</template>

<style scoped>
.container {
  width: 50%;
  text-align: center;
  margin: auto;
}

@media only screen and (max-width: 992px) {
  .container {
    width: 70%;
    padding: 10px;
  }
}

@media only screen and (max-width: 480px) {
  .container {
    width: 100%;
    padding: 5px;
    margin: 30px auto;
  }
}
</style>
