<script setup>
import { onBeforeMount, computed } from 'vue';
import { Analytics } from '@vercel/analytics/vue';
import { preloadBackgrounds } from './utils/preloadBackgrounds';
import { useThemes } from "./composables/useThemes";
import { useAnfitriaoPopup } from "@/utils/anfitriaoPopup";

import Header from "./components/header/Header.vue";
import AnfitriaoButton from './components/AnfitriaoButton.vue';

onBeforeMount(() => {
  preloadBackgrounds()
})

useThemes()

const { spawned } = useAnfitriaoPopup();
const spawnedList = computed(() => spawned);

</script>

<template>
  <SpeedInsights />
  <Analytics />
  <Header />
  <AnfitriaoButton 
    v-for="item in spawnedList" 
    :key="item.id" 
    :data="item" 
  />
  <router-view />
</template>