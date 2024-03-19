<script setup>
const props = defineProps({
  aboutH2: String,
  aboutP: String,
  aboutImgLeft: String,
  aboutImgRight: String,
});
</script>

<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12">
            <h2>{{ aboutH2 }}</h2>
          </v-col>
          <v-col cols="10" offset="2">
            <p v-html="aboutP"></p>
          </v-col>

          <v-col cols="8">
            <img class="img-left" :src="aboutImgLeft" alt="photo montagne" />
          </v-col>
        </v-row>
      </v-col>
      <v-col col="12" sm="5" md="4" offset-sm="1" offset-md="2">
        <img class="img-right" :src="aboutImgRight" alt="photo montagne" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h2 {
  margin-top: 30px;
}

img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.img-left {
  margin-top: 20%;
}

.img-right {
  min-height: 400px;
  margin-top: 0;
}

@media screen and (max-width: 600px) {
  .img-left {
    display: none;
  }
  .img-right {
    max-height: 425px;
  }
}
</style>
