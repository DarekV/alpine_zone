<script setup>
import { ref, onMounted, watchEffect, nextTick } from "vue";
import gsap from "gsap";
import { useRouter } from "vue-router";
import ScrollTrigger from "gsap/ScrollTrigger";
import contentTravelInfo from "/src/components/content_travel_info.vue";
import contentTextC from "/src/components/content_textc.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  img: String,
  title: String,
  content: String,
  title2: String,
  content2: String,
  img3: String,
  title3: String,
  content3: String,
  img4: String,
  title4: String,
  content4: String,
  title5: String,
  content5: String,
});

const pinRef = ref(null);
const router = useRouter();

const initializeAnimations = () => {
  ScrollTrigger.create({
    trigger: pinRef.value,
    start: "bottom bottom",
    endTrigger: ".banner",
    end: `top bottom`,
    pin: true,
    pinSpacing: false,
    markers: true,
  });

  gsap.utils.toArray(".content-travel").forEach(createScrollTrigger);
};

router.beforeEach((to, from, next) => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  next();
});

watchEffect(() => {
  if (router.currentRoute.value !== null) {
    setTimeout(() => {
      nextTick(() => {
        initializeAnimations();
      });
    }, 500);
  }
});

const updateNumberStyle = (number, isBold) => {
  const numElement = document.querySelector(
    `.pin-number .number:nth-child(${number}) p`
  );
  if (numElement) {
    gsap.to(numElement, {
      fontWeight: isBold ? "bold" : "normal",
      scale: isBold ? 1.6 : 1,
      duration: 0.3,
      ease: "power1.inOut",
    });
  }
};

function createScrollTrigger(section, index) {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => updateNumberStyle(index + 1, true),
    onLeave: () => updateNumberStyle(index + 1, false),
    onEnterBack: () => updateNumberStyle(index + 1, true),
    onLeaveBack: () => updateNumberStyle(index + 1, false),
  });
}
</script>
<template>
  <div class="travel">
    <contentTravelInfo
      :img="img"
      :title="title"
      :content="content"
      class="content-travel"
      id="travel1"
    />
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" class="pin-container">
          <div ref="pinRef" class="pin">
            <div class="pin-background">
              <div class="pin-shadow"></div>
              <v-row class="row">
                <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3">
                  <div class="pin-content">
                    <svg
                      width="90%"
                      height="50%"
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
    <div class="content-travel-container" ref="travelContainerRef">
      <contentTextC
        :title="title2"
        :content="content2"
        class="content-travel"
        id="travel2"
      />
      <contentTextLImgR
        :img="img3"
        :title="title3"
        :content="content3"
        class="content-travel content-travel-margin"
        id="travel3"
      />
      <contentTravelInfo
        :img="img4"
        :title="title4"
        :content="content4"
        class="content-travel content-travel-margin"
        id="travel4"
      />
      <contentTextC
        :title="title5"
        :content="content5"
        class="content-travel content-travel-margin"
        id="travel5"
      />
    </div>
    <div class="banner"></div>
  </div>
</template>

<style scoped>
.banner {
  margin-top: 300px;
}
.row {
  height: 100%;
  width: 100%;
}

.travel,
.content-travel {
  position: relative;
  z-index: 1;
}

.travel {
  margin-top: 160px;
  margin-bottom: calc(30vh + 160px);
}

.content-travel-margin {
  margin-top: 30vh;
}

.content-travel-container {
  height: 100%;
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
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 4;

  background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #1d1d1d 70%);
}

svg {
  width: 90%;
  height: 50%;
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
  top: 65%;
  left: -1%;
}
.number:nth-child(2) {
  top: 45%;
  left: 22%;
}
.number:nth-child(3) {
  top: 55%;
  left: 48.5%;
}
.number:nth-child(4) {
  top: 32%;
  left: 75%;
}
.number:nth-child(5) {
  top: 65%;
  left: 98%;
}
</style>
