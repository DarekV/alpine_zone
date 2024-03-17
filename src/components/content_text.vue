<script setup>
import { defineProps } from "vue";

const props = defineProps({
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="11" offset="1" sm="6">
        <p v-html="content"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
