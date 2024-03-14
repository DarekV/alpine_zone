<script setup>
import { defineProps } from "vue";
    img: String,
const props = defineProps({});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" md="6">
        <img :src="img" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
