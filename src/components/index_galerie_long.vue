<script setup>
import cardGrid from "/src/components/card_grid.vue";
import buttonLargeStatick from "/src/components/button_large_statick.vue";
</script>
<template>
  <div class="galerie">
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" class="h2-container">
          <h2>Galerie</h2>
        </v-col>
      </v-row>
    </v-container>
    <cardGrid />
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12 " md="4" offset-md="4">
          <buttonLargeStatick
            class="button"
            :buttonP="`Voir la galerie complette`"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.h2-container {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.button {
  margin: 60px 0 0;
}
</style>
