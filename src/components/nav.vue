<script setup>
import { ref } from "vue";
import logo from "/src/assets/logo.svg";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="header-fixed">
    <v-container class="v-container-margin">
      <v-row class="header-bar">
        <v-col cols="4" lg="7" md="5">
          <router-link to="/">
            <h1>
              <img :src="logo" alt="Alpine" class="logo" />
            </h1>
          </router-link>
        </v-col>
        <v-col>
          <ul>
            <li>
              <router-link
                :to="{ name: 'search', query: { filter: 'montagne' } }"
                >Sommets</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'search', query: { filter: 'temoignage' } }"
                >Témoignages</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'search', query: { filter: 'guide' } }"
                >Guides</router-link
              >
            </li>
            <li>
              <router-link to="/galerie">Galerie</router-link>
            </li>
          </ul>
          <div class="burger-container">
            <div
              class="burger"
              @click="toggleMenu"
              :class="{ 'is-active': isMenuOpen }"
            >
              <div class="burger-line"></div>
              <div class="burger-line"></div>
              <div class="burger-line"></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <ul :class="{ 'menu-open': isMenuOpen }" class="menu">
      <li>
        <router-link :to="{ name: 'search', query: { filter: 'montagne' } }"
          >Sommets</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'search', query: { filter: 'temoignage' } }"
          >Témoignages</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'search', query: { filter: 'guide' } }"
          >Guides</router-link
        >
      </li>
      <li>
        <router-link to="/galerie">Galerie</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  display: flex;
}

.logo {
  position: relative;
  z-index: 1000;
  width: 80px;
}

.header-bar {
  display: flex;
  align-items: center;
}

.header-fixed {
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  z-index: 1000;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: var(--font-family-regular);
  font-size: 20px;
  color: #fff;
  transition: 0.3s ease-in;
  &:hover {
    font-family: var(--font-family-bold);
    color: var(--color-yellow);
  }
}

.burger-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.burger {
  display: none;
  position: relative;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  z-index: 9999;
}

@media screen and (max-width: 768px) {
  .burger {
    display: flex;
  }

  ul {
    display: none;
  }
}

.burger-line {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
}

.menu li {
  margin: 15px 0;
}

.menu-open {
  transform: translateX(0);
}

.menu-open {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transform: translateX(0%);
}

.burger.is-active .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(-2px, -5px);
}

.burger.is-active .burger-line:nth-child(2) {
  opacity: 0;
}

.burger.is-active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(2px, 0px);
}

.burger-line {
  transition: transform 0.3s ease, opacity 0.2s;
}

@media screen and (max-width: 768px) {
  .burger {
    display: flex;
  }
  ul {
    display: none;
  }
}
</style>
