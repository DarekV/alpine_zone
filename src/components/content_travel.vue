<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import contentTravelInfo from "/src/components/content_travel_info.vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  img: String,
  title: String,
  content: String,
});

const pinRef = ref(null);

onMounted(() => {
  nextTick(() => {
    const travelItems = document.querySelectorAll(".containt-travel-container");
    let totalHeight = 0;

    for (let i = 0; i < 3 && i < travelItems.length; i++) {
      totalHeight += travelItems[i].offsetHeight;
    }

    const additionalHeight = window.innerHeight * 0.3;
    totalHeight += additionalHeight;

    ScrollTrigger.create({
      trigger: pinRef.value,
      start: "bottom bottom",
      end: `+=${totalHeight}`,
      pin: true,
      pinSpacing: false,
    });
  });
});

onMounted(() => {
  gsap.utils.toArray(".containt-travel").forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => updateNumberStyle(index + 1, true),
      onLeave: () => updateNumberStyle(index + 1, false),
      onEnterBack: () => updateNumberStyle(index + 1, true),
      onLeaveBack: () => updateNumberStyle(index + 1, false),
    });
  });
});

function updateNumberStyle(number, isBold) {
  const numElement = document.querySelector(
    `.pin-number .number:nth-child(${number}) p`
  );
  if (numElement) {
    gsap.to(numElement, {
      fontWeight: isBold ? "bold" : "normal",
      scale: isBold ? 1.6 : 1.0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  }
}
</script>
<template>
  <div class="travel">
    <contentTravelInfo
      :img="img"
      :title="title"
      :content="content"
      class="containt-travel"
      id="travel1"
    />
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" class="pin-container">
          <div ref="pinRef" class="pin">
            <div class="pin-background">
              <div class="pin-shadow"></div>
              <v-row class="row">
                <v-col cols="12" md="6" offset-md="3">
                  <div class="pin-content">
                    <svg
                      width="614"
                      height="89"
                      viewBox="0 0 614 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 87L146.078 31.5652L313.093 56.9728L473.657 2L612 87"
                        stroke="white"
                        stroke-opacity="0.6"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    <div class="pin-number">
                      <div id="number1" class="number"><p>01</p></div>
                      <div id="number2" class="number"><p>02</p></div>
                      <div id="number3" class="number"><p>03</p></div>
                      <div id="number4" class="number"><p>04</p></div>
                      <div id="number5" class="number"><p>05</p></div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="containt-travel-container">
      <contentTravelInfo
        :img="img"
        :title="title"
        :content="content"
        class="containt-travel"
        id="travel2"
      />
      <contentTravelInfo
        :img="img"
        :title="title"
        :content="content"
        class="containt-travel containt-travel-margin"
        id="travel3"
      />
      <contentTravelInfo
        :img="img"
        :title="title"
        :content="content"
        class="containt-travel containt-travel-margin"
        id="travel4"
      />
      <contentTravelInfo
        :img="img"
        :title="title"
        :content="content"
        class="containt-travel containt-travel-margin"
        id="travel5"
      />
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 100%;
  width: 100%;
}

.travel,
.containt-travel {
  position: relative;
  z-index: 1;
}

.travel {
  margin-top: 160px;
  margin-bottom: calc(30vh + 160px);
}

.containt-travel-margin {
  margin-top: 30vh;
}

.pin-container {
  position: relative;
  height: 30vh;
  padding: 0;
}

.pin {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

.pin-background {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 60px;
}

.pin-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 4;

  background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 50%);
}

svg {
  width: 90%;
  z-index: 5;
}

.pin-content {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.pin-number {
  position: absolute;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.number {
  position: absolute;
  & p {
    text-align: center;
  }
}

.number:nth-child(1) {
  top: 78%;
  left: -1%;
}
.number:nth-child(2) {
  top: 54%;
  left: 22%;
}
.number:nth-child(3) {
  top: 65%;
  left: 49%;
}
.number:nth-child(4) {
  top: 43%;
  left: 75%;
}
.number:nth-child(5) {
  top: 77%;
  left: 98%;
}
</style>
