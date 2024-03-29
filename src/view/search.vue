<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import HeaderShort from "/src/components/header_short.vue";
import ButtonSimple from "/src/components/button_simple.vue";
import Card from "/src/components/card_long.vue";
import catalogHeader from "/src/optimized/makalu_3.webp";
import everestImg from "/src/optimized/everest_header_img.webp";
import k2Img from "/src/optimized/k2_header_img.webp";
import kangchenjungaImg from "/src/optimized/kangchenjunga_header_img.webp";
import lhotseImg from "/src/optimized/lhotse_header_img.webp";
import makaluImg from "/src/optimized/makalu_header_img.webp";
import zoneImg from "/src/optimized/zone_header_img.webp";
import saveImg from "/src/optimized/save_header_img.webp";
import topImg from "/src/optimized/top_header_img.webp";
import startImg from "/src/optimized/start_header_img.webp";
import stuffImg from "/src/optimized/stuff_header_img.webp";

const items = [
  {
    id: 1,
    route: "everest",
    img: everestImg,
    text: "Everest",
    content:
      "Perché à 8 848,86 mètres, l'Everest règne en maître sur le monde des montagnes, offrant un spectacle à couper le souffle qui attire alpinistes et rêveurs depuis des générations.",
    category: "montagne",
  },
  {
    id: 2,
    route: "k2",
    img: k2Img,
    text: "K2",
    category: "montagne",
    content:
      "Le K2, s'élevant à 8 611 mètres, est le deuxième plus haut sommet du monde et est situé sur la frontière entre le Pakistan et la Chine. Connu pour être techniquement plus exigeant que l'Everest, le K2 est surnommé la 'Montagne Sauvage'",
  },
  {
    id: 3,
    route: "kangchenjunga",
    img: kangchenjungaImg,
    text: "Kangchenjunga",
    content:
      "Le Kangchenjunga, trônant à 8 586 mètres, le Kangchenjunga est réputé pour ses cinq pics neigeux et ses paysages à couper le souffle.",
    category: "montagne",
  },
  {
    id: 4,
    route: "lhotse",
    img: lhotseImg,
    text: "Lhotse",
    content:
      "Le Lhotse, se dressant à 8 516 mètres, est le quatrième plus haut sommet du monde, il est célèbre pour sa face Sud impressionnante, l'une des parois de montagne les plus spectaculaires et les plus difficiles au monde.",
    category: "montagne",
  },
  {
    id: 5,
    route: "makalu",
    img: makaluImg,
    text: "Makalu",
    content:
      "Le Makalu, avec son sommet culminant à 8 485 mètres, est le cinquième plus haut sommet du monde. Situé dans la région du Mahalangur Himal, à la frontière entre le Népal et le Tibet, le Makalu est célèbre pour sa forme pyramidale.",
    category: "montagne",
  },
  {
    id: 6,
    route: "zone",
    img: zoneImg,
    text: "Dans la zone morte de l'Everest",
    content:
      "Suivez le témoignage d’un alpiniste dans la zone morte de l’Everest, considérée comme la zone de la mort.",
    category: "temoignage",
  },
  {
    id: 7,
    route: "save",
    img: saveImg,
    text: "Un sauvetage miracle",
    content:
      "Découvrez l'histoire incroyable d'un sauvetage miraculeux par un sherpa sur l'Everest.",
    category: "temoignage",
  },
  {
    id: 8,
    route: "top",
    img: topImg,
    text: "“Sur l'Everest, j'ai enjambé des cadavres“",
    content:
      "Découvrez le témoignage bouleversant d'un alpiniste et de sa rencontre avec la mort pendant son ascension de l'Everest.",
    category: "temoignage",
  },
  {
    id: 9,
    route: "start",
    img: startImg,
    text: "Se mettre à l'alpinisme",
    content:
      "Découvrez les bases de l'alpinisme et les premières étapes pour vous lancer dans cette aventure.",
    category: "guide",
  },
  {
    id: 10,
    route: "stuff",
    img: stuffImg,
    text: "Le matériel d'alpinisme",
    content:
      "Découvrez les équipements et les vêtements nécessaires pour une course d'alpinisme.",
    category: "guide",
  },
];

const searchQuery = ref("");
const selectedFilter = ref("all");

function isVisible(item) {
  const queryMatch = item.text
    .toLowerCase()
    .includes(searchQuery.value.toLowerCase());
  const filterMatch =
    selectedFilter.value === "all" || item.category === selectedFilter.value;
  return queryMatch && filterMatch;
}

function toggleFilter(filter) {
  selectedFilter.value = selectedFilter.value === filter ? "all" : filter;
}

function clearSearch() {
  searchQuery.value = "";
}

const route = useRoute();

onMounted(() => {
  if (route.query.filter) {
    selectedFilter.value = route.query.filter;
  }
});
</script>
<template>
  <header>
    <headerShort :title="`Catalogue`" :headerImg="catalogHeader" />
  </header>
  <main>
    <v-container class="v-container-margin">
      <v-row class="row">
        <v-col cols="12" sm="5">
          <div class="newsletter-input-container">
            <input
              type="text"
              placeholder="Rechercher"
              class="newsletter-input"
              v-model="searchQuery"
            />
            <button class="newsletter-button" @click="clearSearch">
              <p>
                <svg
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </p>
            </button>
          </div>
        </v-col>
        <v-col cols="12" sm="10" md="7" lg="6" offsetLg="1">
          <ul>
            <li>
              <buttonSimple
                buttonP="Montagnes"
                @click="toggleFilter('montagne')"
                :class="{ active: selectedFilter === 'montagne' }"
                class="filter-button"
              />
            </li>
            <li>
              <buttonSimple
                buttonP="Témoignages"
                @click="toggleFilter('temoignage')"
                :class="{ active: selectedFilter === 'temoignage' }"
                class="filter-button"
              />
            </li>
            <li>
              <buttonSimple
                buttonP="Guides"
                @click="toggleFilter('guide')"
                :class="{ active: selectedFilter === 'guide' }"
                class="filter-button last-filter-button"
              />
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" class="col-container">
          <template v-for="item in items">
            <div v-if="isVisible(item)" :key="item.id" class="card">
              <router-link :to="{ name: item.route }">
                <Card
                  :card-img="item.img"
                  :card-text="item.text"
                  :card-content="item.content"
                />
              </router-link>
            </div>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<style scoped>
header {
  margin-bottom: 80px;
}
.newsletter-input-container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.newsletter-input {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 10px 20px;
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-button {
  width: 50px;
  height: 41px;
  background-color: var(--color-yellow);
  & p {
    color: var(--background-black);
    padding-top: 4px;
  }
}

.filter-button {
  transition: 0.5s ease;
}

.active {
  background-color: var(--color-yellow);
}

.row {
  align-items: center;
}

.no-margin {
  padding: 0;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.col-container {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  transition: 0.5s;
  padding: 0;
}

.card {
  width: calc(100% / 3);
  transition: 0.5s;
  padding: 30px 15px;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }

  .filter-button:last-child {
    margin-top: 15px;
  }
}

@media screen and (min-width: 600px) and (max-width: 900px) {
  .card {
    width: calc(100% / 2);
  }
}
</style>
