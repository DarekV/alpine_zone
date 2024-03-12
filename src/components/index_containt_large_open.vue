<script setup>
import buttonLargeStatick from "/src/components/button_large_statick.vue";
import card from "/src/components/card.vue";
</script>
<template>
  <div class="wrapper">
    <div class="shadow-top"></div>
    <div class="shadow-bottom"></div>
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" sm="6" lg="3">
          <card
            :cardImg="'/src/img/container_large_img.jpg'"
            :cardText="`Everest`"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <card
            :cardImg="'/src/img/container_large_img.jpg'"
            :cardText="`Everest`"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <card
            :cardImg="'/src/img/container_large_img.jpg'"
            :cardText="`Everest`"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <card
            :cardImg="'/src/img/container_large_img.jpg'"
            :cardText="`Everest`"
          />
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
  padding: 120px 0 60px;
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
  margin-top: 60px;
}
</style>
