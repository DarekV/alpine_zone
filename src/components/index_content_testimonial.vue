<script setup>
import { ref } from "vue";
import gsap from "gsap";
import zoneHeaderImg from "/src/optimized/zone_header_img.webp";
import jeromeHeaderImg from "/src/optimized/jerome_header_img.webp";
import saveHeaderImg from "/src/optimized/save_header_img.webp";
import topHeaderImg from "/src/optimized/top_header_img.webp";

import ScrollTrigger from "gsap/ScrollTrigger";
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
  contentOpenRef.value.$el.addEventListener("transitionend", () => {
    ScrollTrigger.refresh();
  });

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
      <img class="bg-img" :src="zoneHeaderImg" alt="photo montagne" />
      <div class="shadow-top"></div>
      <div class="shadow-bottom"></div>
      <div class="container-title">
        <v-container class="v-container-margin">
          <v-row class="title">
            <v-col cols="12" md="7">
              <h2>
                Dans la zone morte de l'Everest

                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="42"
                    width="41"
                    height="41"
                    rx="20.5"
                    transform="rotate(-90 1 42)"
                    stroke="#F2DE2A"
                    stroke-width="2"
                  />
                  <rect
                    x="17.9961"
                    y="32.8343"
                    width="1.98851"
                    height="15.8276"
                    transform="rotate(-135 17.9961 32.8343)"
                    fill="#F2DE2A"
                    stroke="#F2DE2A"
                  />
                  <rect
                    x="29.1895"
                    y="21.5428"
                    width="1.98851"
                    height="15.8276"
                    transform="rotate(135 29.1895 21.5428)"
                    fill="#F2DE2A"
                    stroke="#F2DE2A"
                  />
                </svg>
              </h2>
            </v-col>
            <v-col cols="11" offset="1" md="6">
              <p class="title-p">
                Suivez le témoignage d’un alpiniste dans la zone morte de
                l’Everest.
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
      :cardImg1="jeromeHeaderImg"
      :cardText1="`Dans la zone morte`"
      :router1="`zone`"
      :cardImg2="saveHeaderImg"
      :cardText2="`Un sauvetage miracle`"
      :router2="`save`"
      :cardImg3="topHeaderImg"
      :cardText3="`“Sur l’Everest, j’ai enjambé des cadavres“`"
      :router3="`top`"
      :buttonP="`Voir toutes les témoignages`"
      :filter="`temoignage`"
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

svg {
  transform: translate(15px, 5px);
}

@media screen and (max-width: 900px) {
  svg {
    transform: translate(15px, 10px);
  }
}
</style>
