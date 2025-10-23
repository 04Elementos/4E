<script setup>
import { currentQuestion } from "@/utils/questions/questionLogic.js";
import ContainerBorder from "@/components/ContainerBorder.vue";
</script>

<template>
  <div class="question">
    <ContainerBorder />
    <p v-html="currentQuestion"></p> 
  </div>
</template>

<style scoped>
.question {
  font-size: 1.8rem;
  position: relative;
  border: var(--border-default);
  background: rgba(0, 0, 0, 0.549);
  margin: 35px;
  padding: 30px;

}
@media only screen and (max-width: 992px) {
  .question {
    font-size: 1.6rem;
    width: 90%;
    margin: auto;
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 480px) {
  .question {
    font-size: 1.38rem;
  }
}
</style>
