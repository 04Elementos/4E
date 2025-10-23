<script setup>
import { useI18n } from "vue-i18n";
import { useAnfitriaoPopup } from "@/utils/anfitriaoPopup";

const { t } = useI18n();
const { killAnfitriao } = useAnfitriaoPopup();
const props = defineProps({ data: Object });

// Sinto que é auto explicativo essa parte
// Função responsável por redirecionar para o Youtube (Never gonna give you up)

function anfitriaoNeverGonnaGiveYouUp() {
  try {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_self');
  } catch {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}

// Fecha o Popup
function closePopup() {
  killAnfitriao(props.data.id);
}
</script>

<template>
  <div class="popup-box" :style="{
    left: props.data.x + 'px',
    top: props.data.y + 'px',
    position: 'fixed'
  }">
    <div class="popup-header">
      <span class="popup-title">{{ t("anfitriao.header") }}</span>
      <button class="popup-close" @click="closePopup">✕</button>
    </div>
    <button class="dont_press_btn" @click="anfitriaoNeverGonnaGiveYouUp">
      {{ t("anfitriao.body") }}
    </button>
  </div>
</template>

<style scoped>
.popup-box {
  width: 280px;
  border: var(--border-default);
  background: #000000af;
  z-index: 4;
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000af;
  padding: 4px 6px;
  border-bottom: var(--border-default);
}

.popup-title {
  font-size: 1.4rem;
  user-select: none;
}

.popup-close {
  background: #000000af;
  border: var(--border-default);
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-close:hover {
  background-color: rgba(194, 6, 6, 0.7);
}

.popup-close:active {
  background-color: rgba(194, 6, 6, 0.7);
}

.dont_press_btn {
  width: 100%;
  height: 70px;
  border: var(--border-default);
  font-size: 1.3rem;
  background: transparent;
  cursor: pointer;
}

.dont_press_btn:hover {
  background: var(--border-bg-hover);
  color: #000
}

.dont_press_btn:active {
  background: var(--border-bg-hover);
}

@media only screen and (max-width: 992px) {
  .popup-box {
    width: 250px;
  }

  .popup-title {
    font-size: 1.2rem;
  }

  .popup-close {
    font-size: 14px;
  }

  .dont_press_btn {
    height: 55px;
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 480px) {
  .popup-box {
    width: 210px;
  }

  .popup-title {
    font-size: 1rem;
  }

  .dont_press_btn {
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>