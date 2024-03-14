<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  info: String,
  img: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="6" md="7">
        <v-row>
          <v-col cols="12" lg="10">
            <p class="info">
              {{ info }}
            </p>
            <h2>{{ title }}</h2>
          </v-col>

          <v-col cols="10" lg="8" offset="2" class="v-no-margin">
            <p v-html="content"></p>
          </v-col>
        </v-row>
      </v-col>
      <v-col col="12" sm="5" md="4" offset-sm="1">
        <img class="img-right" :src="img" alt="photo montagne" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.info {
  padding-top: 30px;
}

.img-right {
  width: 150%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 650px;
}

@media screen and (max-width: 600px) {
  .img-right {
    max-height: 500px;
    width: 100%;
  }
}
</style>
