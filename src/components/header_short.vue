<script setup>
import navigation from "/src/components/nav.vue";
const props = defineProps({
  title: String,
  headerImg: String,
});
</script>

<template>
  <div class="header-container">
    <img class="header-background-image" :src="headerImg" alt="photo" />
    <div class="header-shadow-bottom"></div>
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" md="5" lg="7">
          <h1 class="title" v-html="title"></h1
        ></v-col>
      </v-row>
    </v-container>
  </div>
  <navigation />
</template>

<style scoped>
.header-background-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  margin-bottom: 500px;
}

.header-container {
  position: relative;
  height: 70vh;
  width: 100%;
  overflow: hidden;
}

.header-shadow-bottom {
  height: 300px;
  width: 100%;
  z-index: 1;
  position: absolute;
  bottom: 0;

  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 0%,
    rgba(29, 29, 29, 0.52) 38.65%,
    #1d1d1d 100%
  );
}

.title {
  color: #fff;
  position: absolute;
  bottom: 160px;
  line-height: 120px;
  font-size: 120px;
  z-index: 99;
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 80px;
    line-height: 80px;
  }
}
</style>
