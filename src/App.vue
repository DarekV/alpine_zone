<script setup>
import headerVue from "/src/components/header.vue";
const title = "Alpine Zone";
import about from "/src/components/about.vue";
const aboutH2Index = "Rejoignez l'aventure";
const aboutPIndex =
  " Chaque sommet a une histoire, et nous sommes là pour vous aider à écrire la vôtre. Que vous aspiriez à atteindre les hauteurs vertigineuses de l'Everest, à relever les défis techniques du K2, ou simplement à explorer les récits de ceux qui l'ont fait, Alpine Zone est votre fenêtre sur le monde exaltant de l'alpinisme. ";
const aboutImgLeftIndex = "/src/img/about_img_3.jpg";
const aboutImgRightIndex = "/src/img/about_img_2.jpg";
import indexContainerLarge from "/src/components/index_containt_large.vue";
</script>
<template>
  <headerVue :title="title" />
  <about
    :aboutImgLeft="aboutImgLeftIndex"
    :aboutImgRight="aboutImgRightIndex"
    :aboutH2="aboutH2Index"
    :aboutP="aboutPIndex"
    class="about"
  />
  <indexContainerLarge
    :buttonP="`Plus d'histoires de montagne`"
    class="container-large"
  />
</template>

<style scoped>
.about {
  margin-top: 160px;
}

.container-large {
  margin-top: 300px;
}
</style>
