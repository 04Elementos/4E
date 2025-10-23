<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { changeQuestionSet, questionSet } from "@/utils/questions/questionUtils.js";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <a
    href="#"
    @click.prevent="route.name !== 'teste' && changeQuestionSet('new')"
    :class="[
      { active: questionSet === 'new' },
      { disabled: route.name === 'teste' },
    ]"
  >
    {{ t("header.new_questions") }}
  </a>
  <a
    href="#"
    @click.prevent="route.name !== 'teste' && changeQuestionSet('old')"
    :class="[
      { active: questionSet === 'old' },
      { disabled: route.name === 'teste' },
    ]"
  >
    {{ t("header.old_questions") }}
  </a>
</template>

<style src="@/components/header/header.css" scoped />