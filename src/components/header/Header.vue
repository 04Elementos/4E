<script setup>
import { useI18n } from "vue-i18n";

import ChangeLanguage from "./ChangeLanguage.vue";
import ChangeQuestion from "./ChangeQuestion.vue";

const { t } = useI18n();
</script>

<template>
  <header>
    <router-link to="/" class="logo">
    {{ t("header.logo") }}
    </router-link>

    <nav>
      <ul>
        <li class="dropdown version-dropdown">
          <a href="#">
            {{ t("header.version") }}
          </a>

          <ul class="dropdown_content">
            <ChangeQuestion />
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            {{ t("header.languages") }}
          </a>

          <ul class="dropdown_content">
            <ChangeLanguage />
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style src="@/components/header/header.css" scoped />

<style scoped>
header {
  height: 80px;
  display: flex;
  background: rgba(0, 0, 0, 0.349);
  align-items: center;
  padding: 0 8%;
  border-bottom: var(--border-2px-default);
  z-index: 10;
}

.logo {
  font-size: 2.2rem;
  width: 250px;
  text-decoration: none;
  cursor: pointer;
}

nav {
  flex: 1;
  text-align: right;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin-left: 60px;
  position: relative;
}

nav ul li a {
  font-size: 1.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
}

nav ul li a:hover {
  color: rgb(78, 194, 6);
}

@media only screen and (max-width: 1024px) {
  header {
    height: 80px;
    padding: 0 5%;
  }

  .logo {
    font-size: 1.75rem;
    width: auto;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

  nav ul li {
    margin-left: 30px;
  }

  nav ul li a {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 480px) {
  #app {
    border: none;
  }

  .logo {
    font-size: 1.5rem;
    width: auto;
    margin-bottom: 0;
  }

  nav {
    text-align: right;
    width: auto;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: block;
    margin-left: 0;
    margin-bottom: 0;
    position: relative;
  }

  nav ul li a {
    font-size: 1.3rem;
    text-decoration: none;
    display: block;
  }
}
</style>
