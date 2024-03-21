<script setup>
import HeaderShort from "/src/components/header_short.vue";
import Card from "/src/components/card.vue";
import aboutImg2 from "/src/img/about_img_2.jpg";
import galerie2 from "/src/img/galerie_2.jpg";
import galerie3 from "/src/img/galerie_3.jpg";
import galerie4 from "/src/img/galerie_4.jpg";
import galerie5 from "/src/img/galerie_5.jpg";
import galerie6 from "/src/img/galerie_6.jpg";
import makaluHeaderImg from "/src/img/makalu_header_img.png";

import { ref } from "vue";

const showOverlay = ref(false);
const selectedImageUrl = ref("");

function openOverlay(imageUrl) {
  selectedImageUrl.value = imageUrl;
  showOverlay.value = true;
}

function closeOverlay() {
  showOverlay.value = false;
}
</script>
<template>
  <header>
    <headerShort :title="`Galerie`" :headerImg="makaluHeaderImg" />
  </header>
  <main>
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(aboutImg2)" :cardImg="aboutImg2" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie2)" :cardImg="galerie2" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie3)" :cardImg="galerie3" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie4)" :cardImg="galerie4" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie5)" :cardImg="galerie5" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie6)" :cardImg="galerie6" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(aboutImg2)" :cardImg="aboutImg2" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie2)" :cardImg="galerie2" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie3)" :cardImg="galerie3" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie4)" :cardImg="galerie4" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie5)" :cardImg="galerie5" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie6)" :cardImg="galerie6" />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="showOverlay" class="overlay" @click="closeOverlay">
      <img :src="selectedImageUrl" alt="Selected photo" />
    </div>
  </main>
</template>
<style scoped>
header {
  margin-bottom: 80px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.5s;
}

.overlay img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
</style>
