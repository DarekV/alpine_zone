<script setup>
import card from "/src/components/card.vue";

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
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" md="3">
        <card
          @click="() => openOverlay('/src/img/about_img_2.jpg')"
          cardImg="/src/img/about_img_2.jpg"
        />
      </v-col>
      <v-col cols="12" md="6">
        <card
          @click="() => openOverlay('/src/img/galerie_2.jpg')"
          cardImg="/src/img/galerie_2.jpg"
        />
      </v-col>
      <v-col cols="12" md="3">
        <card
          @click="() => openOverlay('/src/img/galerie_3.jpg')"
          cardImg="/src/img/galerie_3.jpg"
        />
      </v-col>
      <v-col cols="12" md="6">
        <card
          @click="() => openOverlay('/src/img/galerie_4.jpg')"
          cardImg="/src/img/galerie_4.jpg"
        />
      </v-col>
      <v-col cols="12" md="3">
        <card
          @click="() => openOverlay('/src/img/galerie_5.jpg')"
          cardImg="/src/img/galerie_5.jpg"
        />
      </v-col>
      <v-col cols="12" md="3">
        <card
          @click="() => openOverlay('/src/img/Galerie_6.jpg')"
          cardImg="/src/img/Galerie_6.jpg"
        />
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
