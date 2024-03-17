<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import contentTextC from "/src/components/content_textc.vue";
import banner from "/src/components/banner.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import contentText from "/src/components/content_text.vue";
import contentTravel from "/src/components/content_travel.vue";
import ContentImgText from "/src/components/content_img_text.vue";
</script>
<template>
  <headerVue
    :title="`Lhotse`"
    :headerImg="`/src/img/everest_header_img.jpeg`"
  />
  <description
    :title="`Voisin de l’Everest`"
    :info="`Le Lhotse offre une vue unique sur l’Everest`"
    content="`Le Lhotse, se dressant à 8 516 mètres, est le quatrième plus haut sommet du monde, partageant sa base avec l'Everest, auquel il est connecté par le Col Sud. Cette proximité offre aux alpinistes une vue unique sur l'Everest, tout en présentant ses propres défis techniques et physiques distincts. Le Lhotse est célèbre pour sa face Sud impressionnante, l'une des parois de montagne les plus spectaculaires et les plus difficiles au monde.`"
  />
  <contentTextLImgR
    :title="`Une histoire semée d’embuche`"
    :info="`L’histoire`"
    :content="`Le Lhotse partage son histoire étroitement liée à celle de l'Everest, son voisin emblématique. Situé à la frontière entre le Népal et le Tibet, le Lhotse est célèbre pour sa proximité immédiate avec l'Everest, auquel il est connecté par le Col Sud, et pour sa face sud extrêmement raide et difficile. <br/><br/>L'intérêt pour ce sommet a commencé dans les années 1950, période durant laquelle l'attention était principalement focalisée sur l'ascension de l'Everest. Le Lhotse se distingue par sa propre identité et ses défis uniques, bien que sa proximité avec l'Everest signifie que les deux montagnes partagent souvent une partie de leur voie d'ascension.`"
    :img="`/src/img/everest_header_img.jpeg`"
    class="margin-top"
  />
  <contentText
    :content="`La première ascension réussie du Lhotse a eu lieu le 18 mai 1956 par une équipe suisse. Les alpinistes Ernst Reiss et Fritz Luchsinger ont atteint le sommet principal du Lhotse, marquant ainsi un moment significatif dans l'histoire de l'alpinisme. Cette réussite est survenue peu après la première ascension réussie de l'Everest en 1953, soulignant une période d'explorations himalayennes intenses et fructueuses. <br/><br/>En plus du sommet principal, le massif du Lhotse comprend deux autres sommets importants : le Lhotse Shar (8 383 m) et le Lhotse Middle (8 414 m). Le Lhotse Shar a été gravi pour la première fois en 1970 par une équipe japonaise, tandis que le Lhotse Middle est resté l'un des derniers sommets de plus de 8 000 mètres à être conquis, avec une première ascension réussie en 2001 par une équipe russe.`"
    class="margin-top"
  />
  <contentTextC
    :title="`Préservation continue`"
    :content="`Comme pour d'autres sommets de l'Himalaya, sa conservation face aux impacts environnementaux du changement climatique et de l'alpinisme est une préoccupation croissante. La fonte des glaciers et l'accumulation de déchets sont des problèmes qui nécessitent une gestion et une attention continues pour préserver la beauté et l'intégrité de la montagne.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/everest_header_img.jpeg"> </banner>
  <contentImgLTextR
    :title="`Une ascension difficile`"
    :info="`L’ascension`"
    :img="`/src/img/everest_header_img.jpeg`"
    :content="`L'ascension du Lhotse, avec son impressionnante altitude de 8 516 mètres, représente un défi considérable pour les alpinistes. En tant que quatrième plus haut sommet du monde, situé à la frontière entre le Népal et le Tibet, le Lhotse partage sa route avec l'Everest jusqu'au camp de base avancé, rendant son ascension unique par rapport à d'autres sommets de l'Himalaya. <br/><br/>Il est principalement gravi par sa face ouest, avec l'itinéraire standard passant par le glacier du Khumbu, le même que celui de l'Everest. Les alpinistes traversent le dangereux Icefall du Khumbu avant de suivre la vallée du Silence en direction du Col Sud, où les itinéraires de l'Everest et du Lhotse se séparent.`"
  />
  <contentTextC
    :title="`Défis et dangers`"
    :content="`Son ascension finale commence au Camp 4, où les grimpeurs doivent affronter la face sud abrupte du Lhotse. Cette section de l'ascension est techniquement exigeante, avec des pentes raides de neige et de glace. Les alpinistes doivent utiliser des cordes fixes et des échelles pour naviguer à travers les obstacles avant d'atteindre le sommet. <br/><br/>Les principaux défis de l'ascension du Lhotse incluent la gestion des risques liés à l'altitude élevée, tels que le mal aigu des montagnes (MAM), ainsi que les dangers physiques du terrain, comme les chutes de pierres et les crevasses. Les conditions météorologiques peuvent également changer rapidement, présentant des défis supplémentaires en termes de navigation et de survie.`"
    class="margin-top"
  />
  <contentTravel
    :img="'/src/img/everest_header_img.jpeg'"
    :title="`Trek d'Approche`"
    :content="`De Lukla au Camp de Base : Les alpinistes commencent par un trek de plusieurs jours depuis Lukla jusqu'au camp de base de l'Everest à 5 364 mètres, traversant des villages sherpa et des paysages spectaculaires.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/everest_header_img.jpeg"> </banner>
  <contentImgText
    :info="`Préservation`"
    :content="`La préservation du Lhotse, comme pour d'autres sommets de l'Himalaya, est cruciale pour maintenir l'équilibre écologique fragile de la région et assurer que les générations futures puissent également expérimenter et apprécier sa majesté. La gestion durable des expéditions d'alpinisme, la réduction de l'impact environnemental et le soutien aux communautés locales sont des aspects clés de ces efforts de préservation. <br/><br/>Les autorités népalaises et tibétaines, en collaboration avec diverses organisations de conservation, travaillent à réguler les expéditions pour minimiser leur impact sur l'environnement. Cela inclut la limitation du nombre d'alpinistes, l'imposition de règles strictes concernant le transport des déchets hors de la montagne, et la sensibilisation à l'importance de laisser les camps de base et les itinéraires d'ascension dans un état aussi naturel que possible. <br/><br/>En résumé, la préservation du Lhotse nécessite une approche multidimensionnelle qui intègre la gestion durable des activités d'alpinisme, la réduction de l'impact environnemental, le soutien aux communautés locales et la sensibilisation à la conservation.`"
    :img="`/src/img/everest_header_img.jpeg`"
    class="content-img-text"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
