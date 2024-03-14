<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import banner from "/src/components/banner.vue";
import contentTextL from "/src/components/content_textl.vue";
import contentQuote from "/src/components/content_quote.vue";
import contentTravel from "/src/components/content_travel.vue";
</script>
<template>
  <headerVue
    :title="`Everest`"
    :headerImg="`/src/img/everest_header_img.jpeg`"
  />
  <description
    :title="`Le sommet du Monde`"
    :info="`Le rêve de tous les alpinistes.`"
    content="Perché à 8 848,86 mètres, l'Everest règne en maître sur le monde des montagnes, offrant un spectacle à couper le souffle qui attire alpinistes et rêveurs depuis des générations. Situé à la frontière entre le Népal et le Tibet, ce géant de glace et de roche représente le pinacle de l'aventure humaine. <br/> <br/>  Conquérir son sommet est considéré comme l'un des exploits les plus remarquables, témoignant du courage, de la persévérance et de l'esprit indomptable de ceux qui osent affronter ses pentes. L'Everest n'est pas seulement une montagne; c'est une icône de la quête humaine pour atteindre les étoiles. Hillary lui-même a dit : 'Ce n'est pas la montagne que nous conquérons, mais nous-mêmes.'"
  />
  <contentTextLImgR
    :title="`Quand le défi devient réalité`"
    :info="`L’histoire`"
    :content="`Le récit de l'Everest commence bien avant 1953, avec plusieurs tentatives audacieuses qui ont pavé la voie. George Mallory, dont la disparition en 1924 demeure l'un des plus grands mystères de l'alpinisme, avait philosophiquement répondu à la question &quot;Pourquoi voulez-vous escalader l'Everest ?&quot; par un simple &quot;Parce qu'il est là.&quot; Cette maxime illustre l'attraction irrésistible de la montagne sur l'esprit humain.<br/> <br/> Mais l'Everest n'est pas seulement une histoire de victoires. Il est aussi un miroir des défis environnementaux et éthiques. La surpopulation des expéditions a conduit à des préoccupations concernant les déchets laissés sur la montagne et l'impact sur les glaciers. Reinhold Messner, légende de l'alpinisme, critique ouvertement cette commercialisation, affirmant que &quot;L'Everest ne doit pas devenir un terrain de jeu pour les riches.<br/> <br/> &quot; C’est le 29 mai 1953, l'alpiniste néo-zélandais Sir Edmund Hillary et le Sherpa Tenzing Norgay, originaire du Népal, sont devenus les premiers à atteindre officiellement le sommet de l'Everest. Leur succès a été salué dans le monde entier comme un exploit extraordinaire de détermination et de courage.`"
    :img="`/src/img/everest_header_img.jpeg`"
    class="content-textl-imgr"
  />
  <banner imageUrl="/src/img/everest_header_img.jpeg"> </banner>
  <contentTextL
    :title="`Le début de l’aventure`"
    :info="`L’ascension`"
    :content="`L'ascension de l'Everest est une épopée qui se déroule en plusieurs actes, depuis le trek d'approche à Lukla jusqu'au sommet, en passant par l'acclimatation au camp de base et la lutte finale contre les éléments. Chaque étape requiert une préparation minutieuse, une endurance physique extrême, et une force mentale inébranlable. <br/> <br/>L'Everest a également été témoin d'actes d'héroïsme et de solidarité. Des histoires comme celle de Beck Weathers, laissé pour mort dans la tempête de 1996 mais ayant survécu contre toute attente, rappellent les risques inhérents à l'ascension. Ces récits soulignent l'importance de la solidarité et du respect de la montagne. `"
  />
  <contentQuote
    :quote="`« La montagne n’est ni juste ni injuste.<span> Elle est dangereuse.</span> »`"
    :info="`Reinhold Messner`"
    :content="`Organiser une expédition sur l'Everest est une entreprise colossale, impliquant des mois, voire des années, de planification. La logistique inclut le transport de l'équipement, la gestion des camps de base et intermédiaires, ainsi que la coordination des sherpas et des guides. Les avancées technologiques ont transformé l'ascension, avec l'utilisation de GPS, de communications satellites et d'équipements sophistiqués pour la sécurité. Cependant, ces technologies soulèvent également des questions sur l'authenticité de l'expérience alpine.`"
    class="content-quote"
  />
  <contentTravel
    :img="'/src/img/everest_header_img.jpeg'"
    :title="`Trek d'Approche`"
    :content="`De Lukla au Camp de Base : Les alpinistes commencent par un trek de plusieurs jours depuis Lukla jusqu'au camp de base de l'Everest à 5 364 mètres, traversant des villages sherpa et des paysages spectaculaires.`"
  />
  <banner imageUrl="/src/img/everest_header_img.jpeg"> </banner>
</template>
<style scoped>
.content-textl-imgr {
  margin-top: 300px;
}

.content-quote {
  margin-top: 300px;
}
</style>
