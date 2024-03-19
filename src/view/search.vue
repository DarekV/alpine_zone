<script setup>
import { ref } from "vue";
import HeaderShort from "/src/components/header_short.vue";
import ButtonSimple from "/src/components/button_simple.vue";
import Card from "/src/components/card.vue";

const items = [
  {
    id: 1,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 1",
    category: "montagne",
  },
  {
    id: 2,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 2",
    category: "temoignage",
  },
  {
    id: 3,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 3",
    category: "guide",
  },
  {
    id: 4,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 4",
    category: "guide",
  },
  {
    id: 5,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 5",
    category: "guide",
  },
  {
    id: 6,
    route: "k2",
    img: "/src/img/makalu_1.png",
    text: "Card 6",
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
</script>
<template>
  <header>
    <headerShort
      :title="`Catalogue`"
      :headerImg="`/src/img/makalu_header_img.png`"
    />
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
            <button class="newsletter-button">
              <p>X</p>
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
                class="filter-button"
              />
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="v-container-margin">
      <v-row>
        <template v-for="item in items">
          <v-col
            v-if="isVisible(item)"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            class="card"
          >
            <router-link :to="{ name: item.route }">
              <Card :card-img="item.img" :card-text="item.text" />
            </router-link>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </main>
</template>
<style scoped>
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
</style>
