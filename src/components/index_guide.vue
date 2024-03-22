<script setup>
import buttonLargeStatick from "/src/components/button_large_statick.vue";
import card from "/src/components/card_long.vue";
import img1 from "/src/optimized/start_header_img_index.webp";
import img2 from "/src/optimized/stuff_header_img.webp";
</script>

<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" md="5">
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
          <v-col cols="12" offset-lg="2" md="8" lg="2">
            <buttonLargeStatick
              class="button button-desktop"
              buttonP="Explorer les guides"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="7">
        <v-row>
          <v-col cols="12" sm="6">
            <router-link to="start">
              <card
                :cardImg="img1"
                cardText="Se mettre à l'alpinisme"
                card-content="Découvrez les bases de l'alpinisme et les premières étapes pour vous lancer dans cette aventure."
              />
            </router-link>
          </v-col>
          <v-col cols="12" sm="6">
            <router-link to="stuff">
              <card
                :cardImg="img2"
                cardText="Le matériel d'alpinisme"
                card-content="Découvrez les équipements et les vêtements nécessaires pour une course d'alpinisme."
              />
            </router-link>
          </v-col>
          <v-col cols="12" offset-md="2" md="8" lg="2">
            <router-link
              class="button-mobile"
              :to="{ name: 'search', query: { filter: 'guide' } }"
            >
              <buttonLargeStatick class="button" buttonP="Tous les guides" />
            </router-link>
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

.button {
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
