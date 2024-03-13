<script setup>
import { ref } from "vue";
import buttonLargeStatick from "/src/components/button_large_statick.vue";
import card from "/src/components/card.vue";
</script>

<template>
  <div class="wrapper">
    <div class="shadow-top"></div>
    <div class="shadow-bottom"></div>
    <v-container class="v-container-margin">
      <v-row>
        <v-cols cols="12">
          <div class="container-card">
            <div class="row">
              <div class="col" v-for="n in 3" :key="n">
                <card
                  v-if="n === 1"
                  :card-img="`/src/img/container_large_img.jpg`"
                  :card-text="`Dans la zone morte de l'Everest`"
                />
                <card
                  v-if="n === 2"
                  :card-img="`/src/img/container_large_img.jpg`"
                  :card-text="`Sauvetage miracle`"
                />
                <card
                  v-if="n === 3"
                  :card-img="`/src/img/container_large_img.jpg`"
                  :card-text="`Réussir son défit d'ascension`"
                />
              </div>
            </div>
          </div>
        </v-cols>
      </v-row>
      <v-row justify="end">
        <v-col cols="12" class="open-button" lg="4" md="6">
          <buttonLargeStatick
            class="button"
            :buttonP="`voire toutes les montagnes`"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--background-black);
  position: relative;
}

.container-card {
  padding: 120px 0 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}

.col {
  flex: 1 0 0%;
  max-width: 100%;
  padding: 12px;
  transition: flex 0.5s ease;
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }

  .col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.col:hover {
  flex-grow: 2;
}

.open-button {
  display: flex;
  justify-content: flex-end;
  z-index: 1;
}

.open-button {
  display: flex;
  justify-content: flex-end;
  z-index: 1;
}

.shadow-top {
  position: absolute;
  width: 100%;
  height: 300px;
  top: 0;
  background: linear-gradient(360deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 100%);
}

.shadow-bottom {
  position: absolute;
  width: 100%;
  height: 300px;
  left: 0;
  bottom: 0;
  background: linear-gradient(360deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 100%);
  transform: rotate(-180deg);
}

.button {
  margin: 60px 0;
}
</style>
