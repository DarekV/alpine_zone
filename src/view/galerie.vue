<script setup>
import HeaderShort from "/src/components/header_short.vue";
import Card from "/src/components/card.vue";
import aboutImg2 from "/src/optimized/about_img_2.webp";
import galerie2 from "/src/optimized/galerie_2.webp";
import galerie3 from "/src/optimized/galerie_3.webp";
import galerie4 from "/src/optimized/galerie_4.webp";
import galerie5 from "/src/optimized/galerie_5.webp";
import galerie6 from "/src/optimized/galerie_6.webp";
import makaluHeaderImg from "/src/optimized/makalu_header_img.webp";
import galerie7 from "/src/optimized/k2_4.webp";
import galerie8 from "/src/optimized/k2_2.webp";
import galerie9 from "/src/optimized/everest_header_img.webp";
import galerie10 from "/src/optimized/kangchenjunga_header_img.webp";
import galerie11 from "/src/optimized/lhotse_header_img.webp";
import galerie12 from "/src/optimized/makalu_2.webp";

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
          <card @click="() => openOverlay(galerie7)" :cardImg="galerie7" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie8)" :cardImg="galerie8" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie9)" :cardImg="galerie9" />
        </v-col>
        <v-col cols="12" md="6">
          <card @click="() => openOverlay(galerie10)" :cardImg="galerie10" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie11)" :cardImg="galerie11" />
        </v-col>
        <v-col cols="12" md="3">
          <card @click="() => openOverlay(galerie12)" :cardImg="galerie12" />
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
