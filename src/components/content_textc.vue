<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h2>{{ title }}</h2>
      </v-col>
      <v-col cols="11" sm="5" offset="1" offset-sm="4" class="col-margin">
        <p v-html="content"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.col-margin {
  padding-top: 18px;
}
</style>
