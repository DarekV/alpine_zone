<script setup>
import buttonLargeStatick from "/src/components/button_large_statick.vue";
import card from "/src/components/card.vue";
</script>

<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <h2>Guides d'alpinisme</h2>
          </v-col>
          <v-col cols="10" offset="2">
            <p>
              Plongez dans notre section "Guides" pour trouver des conseils
              d'experts et des stratégies détaillées pour conquérir les plus
              hauts sommets du monde. De la préparation à l'ascension finale,
              chaque guide est conçu pour vous équiper de connaissances
              essentielles et vous inspirer à atteindre de nouveaux sommets en
              toute sécurité.
            </p>
          </v-col>
          <v-col cols="12" offset-md="2" md="8" lg="2">
            <buttonLargeStatick
              class="button button-desktop"
              buttonP="Explorer les guides"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" sm="6">
            <card
              cardImg="/src/img/container_large_img.jpg"
              cardText="Dans la
            zone morte de l'Everest"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <card
              cardImg="/src/img/container_large_img.jpg"
              cardText="Dans la
            zone morte de l'Everest"
            />
          </v-col>
          <v-col cols="12" offset-md="2" md="8" lg="2">
            <buttonLargeStatick
              class="button button-mobile"
              buttonP="Explorer les guides"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h2 {
  margin-top: 30px;
}

p {
  margin-top: 30px;
}

.mobile {
  margin-top: 60px;
}

.button-mobile {
  display: none;
}

@media screen and (max-width: 600px) {
  .button-desktop {
    display: none;
  }
  .button-mobile {
    display: block;
    margin-top: 60px;
  }
}
</style>
