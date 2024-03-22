<script setup>
import card from "/src/components/card.vue";

import { ref } from "vue";
import aboutImg2 from "/src/optimized/about_img_2.webp";
import galerie2 from "/src/optimized/galerie_2.webp";
import galerie3 from "/src/optimized/galerie_3.webp";
import galerie4 from "/src/optimized/galerie_4.webp";
import galerie5 from "/src/optimized/galerie_5.webp";
import Galerie6 from "/src/optimized/galerie_6.webp";

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
        <card @click="() => openOverlay(Galerie6)" :cardImg="Galerie6" />
      </v-col>
    </v-row>
  </v-container>
  <div v-if="showOverlay" class="overlay" @click="closeOverlay">
    <img :src="selectedImageUrl" alt="Selected photo" />
  </div>
</template>

<style scoped>
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
