import { createApp } from 'vue'

import './assets/main.css'
import './assets/fonts.css'
import './assets/variables.css'

import App from './App.vue'
import router from '../src/router'

import { i18n } from './i18n'
import { preloadBackgrounds } from '@/utils/preloadBackgrounds'

preloadBackgrounds()

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')