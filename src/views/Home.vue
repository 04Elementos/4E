<script setup>
import { useI18n } from "vue-i18n";
import { setBackground } from '@/utils/setBackgrounds'

import SocialHome from "@/components/SocialHome.vue";

const { t } = useI18n();

setBackground('home')
</script>

<template>
  <div class="box-content">
    <p class="title" v-html="t('home.title')"></p>

    <router-link to="/aviso">
      <button class="start-btn">
        {{ t('home.start') }}
      </button>
    </router-link>
  </div>

  <div class="footer">
    <SocialHome />
    <p>
      {{ t('home.footer') }}
    </p>
  </div>
</template>

<style src="@/views/styles/Home.css" scoped />