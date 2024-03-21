<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import banner from "/src/components/banner.vue";
import contentTextL from "/src/components/content_textl.vue";
import contentQuote from "/src/components/content_quote.vue";
import contentTravel from "/src/components/content_travel.vue";
import ContentImgText from "/src/components/content_img_text.vue";

import headerImg from "/src/img/everest_header_img.jpeg";
import contentImg1 from "/src/img/everest_1.jpg";
import contentImg2 from "/src/img/everest_2.jpg";
import contentImg3 from "/src/img/everest_3.jpg";
import contentImg4 from "/src/img/everest_4.jpeg";
import contentImg5 from "/src/img/everest_5.jpeg";
import zoneHeaderImg from "/src/img/zone_header_img.jpg";
</script>
<template>
  <headerVue :title="`Everest`" :headerImg="headerImg" />
  <description
    :title="`Le sommet du Monde`"
    :info="`Le rêve de tous les alpinistes.`"
    content="Perché à 8 848,86 mètres, l'Everest règne en maître sur le monde des montagnes, offrant un spectacle à couper le souffle qui attire alpinistes et rêveurs depuis des générations. Situé à la frontière entre le Népal et le Tibet, ce géant de glace et de roche représente le pinacle de l'aventure humaine. <br/> <br/>  Conquérir son sommet est considéré comme l'un des exploits les plus remarquables, témoignant du courage, de la persévérance et de l'esprit indomptable de ceux qui osent affronter ses pentes. L'Everest n'est pas seulement une montagne; c'est une icône de la quête humaine pour atteindre les étoiles. Hillary lui-même a dit : 'Ce n'est pas la montagne que nous conquérons, mais nous-mêmes.'"
  />
  <contentTextLImgR
    :title="`Quand le défi devient réalité`"
    :info="`L’histoire`"
    :content="`Le récit de l'Everest commence bien avant 1953, avec plusieurs tentatives audacieuses qui ont pavé la voie. George Mallory, dont la disparition en 1924 demeure l'un des plus grands mystères de l'alpinisme, avait philosophiquement répondu à la question &quot;Pourquoi voulez-vous escalader l'Everest ?&quot; par un simple &quot;Parce qu'il est là.&quot; Cette maxime illustre l'attraction irrésistible de la montagne sur l'esprit humain.<br/> <br/> Mais l'Everest n'est pas seulement une histoire de victoires. Il est aussi un miroir des défis environnementaux et éthiques. La surpopulation des expéditions a conduit à des préoccupations concernant les déchets laissés sur la montagne et l'impact sur les glaciers. Reinhold Messner, légende de l'alpinisme, critique ouvertement cette commercialisation, affirmant que &quot;L'Everest ne doit pas devenir un terrain de jeu pour les riches.<br/> <br/> &quot; C’est le 29 mai 1953, l'alpiniste néo-zélandais Sir Edmund Hillary et le Sherpa Tenzing Norgay, originaire du Népal, sont devenus les premiers à atteindre officiellement le sommet de l'Everest. Leur succès a été salué dans le monde entier comme un exploit extraordinaire de détermination et de courage.`"
    :img="contentImg1"
    class="margin-top"
  />
  <banner :imageUrl="contentImg2"> </banner>
  <contentTextL
    :title="`Le début de l’aventure`"
    :info="`L’ascension`"
    :content="`L'ascension de l'Everest est une épopée qui se déroule en plusieurs actes, depuis le trek d'approche à Lukla jusqu'au sommet, en passant par l'acclimatation au camp de base et la lutte finale contre les éléments. Chaque étape requiert une préparation minutieuse, une endurance physique extrême, et une force mentale inébranlable. <br/> <br/>L'Everest a également été témoin d'actes d'héroïsme et de solidarité. Des histoires comme celle de Beck Weathers, laissé pour mort dans la tempête de 1996 mais ayant survécu contre toute attente, rappellent les risques inhérents à l'ascension. Ces récits soulignent l'importance de la solidarité et du respect de la montagne. `"
  />
  <contentQuote
    :quote="`« La montagne n’est ni juste ni injuste.<span> Elle est dangereuse.</span> »`"
    :info="`Reinhold Messner`"
    :content="`Organiser une expédition sur l'Everest est une entreprise colossale, impliquant des mois, voire des années, de planification. La logistique inclut le transport de l'équipement, la gestion des camps de base et intermédiaires, ainsi que la coordination des sherpas et des guides. Les avancées technologiques ont transformé l'ascension, avec l'utilisation de GPS, de communications satellites et d'équipements sophistiqués pour la sécurité. Cependant, ces technologies soulèvent également des questions sur l'authenticité de l'expérience alpine.`"
    class="margin-top"
  />
  <contentTravel
    :img="contentImg2"
    :title="`01. Trek d'Approche`"
    :content="`De Lukla au Camp de Base : Les alpinistes commencent par un trek de plusieurs jours depuis Lukla jusqu'au camp de base de l'Everest à 5 364 mètres, traversant des villages sherpa et des paysages spectaculaires.`"
    :title2="`02. Acclimatation`"
    :content2="`Camp de Base : Les grimpeurs passent plusieurs jours au camp de base pour s'acclimater à l'altitude, avec des rotations entre les camps supérieurs pour renforcer leur adaptation à l'altitude.`"
    :title3="`03. Ascension principale`"
    :content3="`Camp 1 (6 000 m) : Traversée du dangereux Khumbu Icefall.<br/><br/>Camp 2 (6 400 m) : Situé dans la vallée du Silence, c'est un site d'acclimatation important.<br/><br/>Camp 3 (7 200 m) : Sur la Lhotse face, nécessite l'utilisation d'oxygène supplémentaire.<br/><br/>Camp 4 (7 950 m) : Aussi appelé le Camp du Col Sud, c'est le dernier camp avant le sommet.`"
    :img3="contentImg4"
    :title4="`04. L'Assaut Final`"
    :content4="`Sommet (8 848 m) : L'ascension finale commence généralement de nuit pour atteindre le sommet tôt le matin. Les alpinistes traversent des obstacles tels que le Balcon, le ressaut Hillary et le sommet sud, avant d'atteindre le sommet de l'Everest.`"
    :img4="contentImg5"
    :title5="`05. Descente`"
    :content5="`La descente est tout aussi périlleuse et les alpinistes doivent retraverser les mêmes obstacles en redescendant vers le camp de base.`"
    class="margin-top"
  />
  <banner :imageUrl="contentImg3"> </banner>
  <contentImgText
    :info="`Préservation`"
    :content="`Le récit de l'Everest commence bien avant 1953, avec plusieurs tentatives audacieuses qui ont pavé la voie. George Mallory, dont la disparition en 1924 demeure l'un des plus grands mystères de l'alpinisme, avait philosophiquement répondu à la question &quot;Pourquoi voulez-vous escalader l'Everest ?&quot; par un simple &quot;Parce qu'il est là.&quot; Cette maxime illustre l'attraction irrésistible de la montagne sur l'esprit humain.<br/> <br/> Mais l'Everest n'est pas seulement une histoire de victoires. Il est aussi un miroir des défis environnementaux et éthiques. La surpopulation des expéditions a conduit à des préoccupations concernant les déchets laissés sur la montagne et l'impact sur les glaciers. Reinhold Messner, légende de l'alpinisme, critique ouvertement cette commercialisation, affirmant que &quot;L'Everest ne doit pas devenir un terrain de jeu pour les riches.<br/> <br/> &quot; C’est le 29 mai 1953, l'alpiniste néo-zélandais Sir Edmund Hillary et le Sherpa Tenzing Norgay, originaire du Népal, sont devenus les premiers à atteindre officiellement le sommet de l'Everest. Leur succès a été salué dans le monde entier comme un exploit extraordinaire de détermination et de courage.`"
    :img="zoneHeaderImg"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
