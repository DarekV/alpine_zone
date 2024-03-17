<script setup>
import { ref } from "vue";
import buttonLarge from "/src/components/button_large.vue";
import contentOpen from "/src/components/index_content_open_animated.vue";
const props = defineProps({
  buttonP: String,
});

const activated = ref(false);
const contentOpenRef = ref(null);
const componentContainerRef = ref(null);

function toggleactive() {
  activated.value = !activated.value;

  setTimeout(
    () => {
      if (!activated.value && componentContainerRef.value) {
        componentContainerRef.value.scrollIntoView({ behavior: "smooth" });
      } else if (activated.value && contentOpenRef.value) {
        contentOpenRef.value.$el.scrollIntoView({ behavior: "smooth" });
      }
    },
    activated.value ? 600 : 100
  );
}
</script>
<template>
  <div class="component-container" ref="componentContainerRef">
    <div class="component">
      <img
        class="bg-img"
        src="/src/img/everest_header_img.jpeg"
        alt="photo montagne"
      />
      <div class="shadow-top"></div>
      <div class="shadow-bottom"></div>
      <div class="container-title">
        <v-container class="v-container-margin">
          <v-row class="title">
            <v-col cols="12" md="7">
              <router-link to="everest">
                <h2>Everest</h2>
              </router-link>
            </v-col>
            <v-col cols="11" offset="1" md="6">
              <p class="title-p">
                Découvrez l’histoire de l’Everest ainsi que son ascension avec
                Alpin Zone.
              </p>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="12" class="open-button" lg="4" md="6">
              <buttonLarge :buttonP="buttonP" @click.prevent="toggleactive" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <contentOpen
      class="content-open"
      :class="{ active: activated }"
      ref="contentOpenRef"
      :cardImg1="`/src/img/k2_header_img.jpg`"
      :cardText1="`k2`"
      :router1="`k2`"
      :cardImg2="`/src/img/kangchenjunga_header_img.jpg`"
      :cardText2="`Kangchenjunga`"
      :router2="`kangchenjunga`"
      :cardImg3="`/src/img/Lhotse_header_img.jpg`"
      :cardText3="`Lhotse`"
      :router3="`lhotse`"
    />
  </div>
</template>
<style scoped>
.component-container {
  position: relative;
}

.title-p {
  font-size: 24px;
  font-family: var(--font-family-bold);
  margin-bottom: 30px;
}

.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.component {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  z-index: 1;
}

.container-title {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 60px;
}

.shadow-top {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 120px;
  top: 0;
  background: linear-gradient(360deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 100%);
}

.shadow-bottom {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 300px;
  left: 0;
  bottom: 0;
  background: linear-gradient(360deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 100%);
  transform: rotate(-180deg);
}

.title {
  bottom: 160px;
}

.open-button {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 600px) {
  .title-p {
    margin-bottom: 60px;
  }
}

.content-open {
  width: 100%;
  z-index: 0;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.5s, max-height 0.5s ease-in-out;
}

.content-open.active {
  opacity: 1;
  max-height: 10000px;
  transition: max-height 0.5s ease, opacity 0.5s 0.5s ease-in-out;
}
</style>
