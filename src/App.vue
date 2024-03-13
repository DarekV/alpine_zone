<script setup>
import headerVue from "/src/components/header.vue";
import about from "/src/components/about.vue";
const aboutImgLeftIndex = "/src/img/about_img_3.jpg";
const aboutImgRightIndex = "/src/img/about_img_2.jpg";
import indexContentMontain from "/src/components/index_content_montain.vue";
import indexContentTestimonial from "/src/components/index_content_testimonial.vue";
import indexGuide from "/src/components/index_guide.vue";
import indexGalerie from "/src/components/index_galerie.vue";
import footerContent from "/src/components/footer.vue";
</script>
<template>
  <headerVue :title="`Alpine Zone`" />
  <about
    :aboutImgLeft="aboutImgLeftIndex"
    :aboutImgRight="aboutImgRightIndex"
    :aboutH2="`Rejoignez l'aventure`"
    :aboutP="`Chaque sommet a une histoire, et nous sommes là pour vous aider à écrire la vôtre. Que vous aspiriez à atteindre les hauteurs vertigineuses de l'Everest, à relever les défis techniques du K2, ou simplement à explorer les récits de ceux qui l'ont fait, Alpine Zone est votre fenêtre sur le monde exaltant de l'alpinisme.`"
    class="about"
  />
  <indexContentMontain
    :buttonP="`Plus d'histoires de montagne`"
    class="container-large"
  />
  <indexContentTestimonial
    :buttonP="`Plus de témoignages`"
    class="container-large"
  />
  <indexGuide class="guide" />
  <indexGalerie class="galerie" />
  <footer>
    <footerContent />
  </footer>
</template>

<style scoped>
.about {
  margin-top: 160px;
}

.container-large {
  margin-top: 300px;
}

.guide {
  margin-top: 300px;
}

.galerie {
  margin-top: 300px;
}

@media screen and (max-width: 600px) {
  .about {
    margin-top: 120px;
  }

  .container-large {
    margin-top: 240px;
  }

  .guide {
    margin-top: 240px;
  }

  .galerie {
    margin-top: 240px;
  }
}
</style>
