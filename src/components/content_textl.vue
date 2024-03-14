<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  info: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="7">
        <p class="info">
          {{ info }}
        </p>
        <h2>{{ title }}</h2>
      </v-col>
      <v-col cols="11" offset="1" sm="6">
        <p v-html="content"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
