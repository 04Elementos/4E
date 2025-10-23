<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { sendResults } from "@/utils/questions/questionLogic";

const { t } = useI18n();
const username = ref("");
</script>

<template>
  <div>
    <h2>
      {{ t('end_quiz.title') }}
    </h2>
    <p>
      {{ t('end_quiz.info') }}
    </p>

    <input
      type="text"
      v-model="username"
      class="inputName"
      :placeholder="t('end_quiz.placeholder')"
      maxlength="45"
    />
    <br />
    <button @click="sendResults(username)">
      {{ t('end_quiz.send_answer') }}
    </button>
  </div>
</template>

<style scoped>
div {
  width: 30%;
  background: #000000e3;
  padding: 20px;
  border: var(--border-2px-default);
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
}

.inputName {
  width: 90%;
  background-color: #000;
  border: 1px solid #fff;
  font-size: 1.1rem;
  text-align: center;
  padding: 10px 28px;
  margin-top: 20px;
  margin-bottom: 20px;
}

button {
  background-color: #000;
  border: var(--border-default);
  width: 90%;
  padding: 10px 28px;
  margin: 6px;
  font-size: 1.3rem;
}

button:hover {
  background-color: var(--border-bg-hover);
  color: #000;
  cursor: pointer;
}

button:active {
  background-color: #fff;
  color: #000;
}

@media only screen and (max-width: 992px) {
  div {
    width: 50%;
    top: 45%;
  }

  button {
    width: 90%;
    margin: 7px;
  }

}

@media only screen and (max-width: 690px) {
  div {
    width: 90%;
    padding: 15px;
    font-size: 1.3rem;
  }
  h2{
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  .inputName {
    width: 80%;
  }

  button {
    width: 80%;
    margin: 7px;
  }
}
</style>
