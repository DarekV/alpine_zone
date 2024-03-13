<script setup>
import card from "/src/components/card.vue";
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" md="3">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
      <v-col cols="12" md="6">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
      <v-col cols="12" md="3">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
      <v-col cols="12" md="6">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
      <v-col cols="12" md="3">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
      <v-col cols="12" md="3">
        <card :cardImg="`/src/img/about_img_3.jpg`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
