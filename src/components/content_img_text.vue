<script setup>
import { defineProps } from "vue";

const props = defineProps({
  info: String,
  img: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row class="v-row-margin">
      <v-col col="12" sm="8" offset-sm="2">
        <img :src="img" alt="photo montagne" />
      </v-col>
      <v-col cols="12" sm="7" offset-sm="3">
        <p class="info">
          {{ info }}
        </p>
        <p v-html="content"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.info {
  padding-bottom: 15px;
}

.v-row-margin {
  margin-top: 18px;
}

img {
  width: 100%;
  object-fit: cover;
}
</style>
