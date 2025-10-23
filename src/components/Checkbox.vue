<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="footer">
    <div class="check">
      <label class="control control--checkbox">
        <p v-html="t('warning.checkbox')"></p>
        <input type="checkbox" id="checkbox_confirm" />
        <div class="control__indicator"></div>
      </label>
      <router-link to="/teste" class="proceed-btn rt-a">
        {{ t("warning.proceed") }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  padding-top: 15px;
  text-align: center;
  position: relative;
}

.check {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.check p {
  font-size: 1.3rem;
  padding-bottom: 10px;
  text-align: left;
}

.check .control {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 1.1rem;
}

.check .control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.check .control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
}

.check .control:hover input ~ .control__indicator,
.check .control input:focus ~ .control__indicator {
  background: #ccc;
}

.check .control input:checked ~ .control__indicator {
  background: rgb(20, 20, 20);
}

.check .control__indicator:after {
  content: "";
  position: absolute;
  display: none;
}

.check .control input:checked ~ .control__indicator:after {
  display: block;
}

.check .control--checkbox .control__indicator:after {
  left: 8px;
  top: 4px;
  width: 3px;
  height: 8px;
  border: solid rgb(8, 187, 8);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.check .control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

.proceed-btn {
  width: 80%;
  padding: 10px 20px;
  cursor: pointer;
  border: var(--border-default);
  background: rgba(0, 0, 0, 0.349);
  color: inherit;
  font-size: 1.4rem;
  text-decoration: none;
}

.proceed-btn:hover {
  background-color: var(--border-bg-hover);
  color: #000;
}

.rt-a {
  color: inherit;
  text-decoration: none;
}

@media only screen and (max-width: 1200px) {
  .check p {
    font-size: 1.1rem;
  }

  .check .control {
    font-size: 1rem;
  }

  .proceed-btn {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 992px) {
  .check p {
    font-size: 1rem;
  }

  .check .control {
    font-size: 0.9rem;
  }

  .proceed-btn {
    font-size: 1.1rem;
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .check {
    flex-direction: column;
    align-items: flex-start;
  }

  .check p {
    font-size: 0.9rem;
  }

  .check .control {
    font-size: 0.9rem;
  }

  .proceed-btn {
    font-size: 1rem;
    width: 100%;
  }
}
</style>