<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  title: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="6">
        <img :src="img" alt="photo" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12">
            <h2>{{ title }}</h2>
          </v-col>
          <v-col cols="10" offset="2">
            <p v-html="content"></p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

h2 {
  margin-top: 30px;
}

p {
  padding-top: 18px;
}
</style>
