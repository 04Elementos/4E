<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFontSize } from '@/composables/useFontSize';

const { t } = useI18n();
const { locale } = useI18n()

useFontSize()

watch(locale, (newLocale) => {
    localStorage.setItem('language', newLocale)
})
</script>
<template>
    <a href="#" @click.prevent="locale = 'pt'">
        <span class="flag-icon flag-icon-br"></span>
        {{ t('header.lang_pt') }}
    </a>
    <a href="#" @click.prevent="locale = 'en'">
        <span class="flag-icon flag-icon-us"></span>
        {{ t('header.lang_en') }}
    </a>
    <a href="#" @click.prevent="locale = 'es'">
        <span class="flag-icon flag-icon-es"></span>
        {{ t('header.lang_es') }}
    </a>
    <a href="#" @click.prevent="locale = 'fr'">
        <span class="flag-icon flag-icon-fr"></span>
        {{ t('header.lang_fr') }}
    </a>
    <a href="#" @click.prevent="locale = 'ru'">
        <span class="flag-icon flag-icon-ru"></span>
        {{ t('header.lang_ru') }}
    </a>
    <a href="#" @click.prevent="locale = 'tr'">
        <span class="flag-icon flag-icon-tr"></span>
        {{ t('header.lang_tr') }}
    </a>
    <a href="#" @click.prevent="locale = 'ja'">
        <span class="flag-icon flag-icon-jp"></span>
        {{ t('header.lang_ja') }}
    </a>
</template>

<style src="@/components/header/header.css" scoped />