<script setup>
import { ref } from "vue";
import buttonLargeStatick from "/src/components/button_large_statick.vue";
import card from "/src/components/card.vue";

const props = defineProps({
  cardImg1: String,
  cardText1: String,
  router1: String,
  cardImg2: String,
  cardText2: String,
  router2: String,
  cardImg3: String,
  cardText3: String,
  router3: String,
});
</script>

<template>
  <div class="wrapper">
    <div class="shadow-top"></div>
    <div class="shadow-bottom"></div>
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12">
          <div class="container-card">
            <div class="row">
              <div class="col" v-for="n in 3" :key="n">
                <router-link :to="router1" v-if="n === 1">
                  <card :card-img="cardImg1" :card-text="cardText1" />
                </router-link>
                <router-link :to="router2" v-if="n === 2">
                  <card :card-img="cardImg2" :card-text="cardText2" />
                </router-link>
                <router-link :to="router3" v-if="n === 3">
                  <card :card-img="cardImg3" :card-text="cardText3" />
                </router-link>
              </div>
            </div>
          </div>
        </v-col>
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
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}

.col {
  width: 100%;
  flex: 1 0 0%;
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
