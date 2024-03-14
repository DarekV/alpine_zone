<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  info: String,
  content: String,
});
</script>
<template>
  <div class="description">
    <v-container class="v-container-margin">
      <v-row class="row">
        <v-col cols="12" md="8">
          <h2>{{ title }}</h2>
        </v-col>
        <v-col cols="11" md="8" class="info-p">
          <p>{{ info }}</p>
        </v-col>
        <v-col cols="12" md="6" class="description-p">
          <p v-html="content"></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.description {
  margin-top: 160px;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.info-p {
  padding-top: 0;
}

.description-p {
  padding-top: 30px;
}
</style>
