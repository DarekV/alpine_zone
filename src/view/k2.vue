<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import contentTextC from "/src/components/content_textc.vue";
import banner from "/src/components/banner.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import contentText from "/src/components/content_text.vue";
import contentQuote from "/src/components/content_quote.vue";
import contentTravel from "/src/components/content_travel.vue";
import ContentImgText from "/src/components/content_img_text.vue";
</script>
<template>
  <headerVue :title="`k2`" :headerImg="`/src/img/everest_header_img.jpeg`" />
  <description
    :title="`La montagne sauvage`"
    :info="`Le sommet le plus mortel`"
    content="`Le K2, s'élevant à 8 611 mètres, est le deuxième plus haut sommet du monde et est situé sur la frontière entre le Pakistan et la Chine. Connu pour être techniquement plus exigeant que l'Everest, le K2 est surnommé la 'Montagne Sauvage' en raison de ses conditions météorologiques imprévisibles et de ses pentes abruptes. Les alpinistes qui s'y aventurent doivent faire face à des risques élevés d'avalanches, de chutes de pierres et de tempêtes soudaines. Avec un taux de réussite et de survie inférieur à celui de l'Everest, le K2 est respecté dans la communauté de l'alpinisme comme l'un des défis les plus difficiles et les plus dangereux. <br/> <br/>C’est la montagne avec le plus haut taux de décès avoisinant les 20%.`"
  />
  <contentTextLImgR
    :title="`Une histoire semée d’embuche`"
    :info="`L’histoire`"
    :content="`La première ascension réussie du K2 fut réalisée le 31 juillet 1954 par Achille Compagnoni et Lino Lacedelli, membres d'une expédition italienne dirigée par Ardito Desio. Cette victoire fut le résultat de plusieurs tentatives précédentes et marqua une étape majeure dans l'histoire de l'alpinisme. L'exploit démontra non seulement le courage et la détermination des grimpeurs mais souligna également les défis techniques et physiques uniques posés par le K2. <br/><br/>Son histoire est également marquée par des moments de tragédie, comme l'expédition désastreuse de 1986, où treize grimpeurs perdirent la vie au cours d'une saison d'été particulièrement meurtrière. Ces événements tragiques mettent en lumière les risques extrêmes auxquels sont confrontés les alpinistes sur le K2, renforçant son statut de montagne impitoyable.`"
    :img="`/src/img/everest_header_img.jpeg`"
    class="margin-top"
  />
  <contentTextC
    :title="`Une femme au sommet`"
    :content="`Wanda Rutkiewicz, une alpiniste polonaise de renom, fut la première femme à atteindre le sommet du K2 le 23 juin 1986, sans l'utilisation d'oxygène supplémentaire. Son ascension a ouvert la voie à d'autres femmes alpinistes, démontrant que les défis du K2 ne connaissent pas de frontières de genre.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/everest_header_img.jpeg"> </banner>
  <contentImgLTextR
    :title="`L’ascension`"
    :info="`L’ascension`"
    :img="`/src/img/everest_header_img.jpeg`"
    :content="`Plusieurs voies mènent au sommet, mais la plus empruntée est la Voie des Abruzzes sur le flanc sud-est. Malgré sa popularité, cette voie reste extrêmement périlleuse avec des sections comme la ‘House's Chimney’, le ‘Black Pyramid’, qui présentent des défis techniques sérieux, et le ‘Bottleneck’, un couloir étroit situé juste en dessous du sommet, connu pour être le passage le plus dangereux de l'ascension, en partie à cause du risque élevé de chutes de séracs.`"
  />
  <contentQuote
    :quote="`« Pour se frotter au K2,<span> il faut  avoir de l'expérience.</span> »`"
    :info="`Mario Dutil`"
    :content="`L'ascension du K2 exige une préparation physique et technique rigoureuse. Les alpinistes doivent être expérimentés en escalade sur glace et roche, posséder une endurance exceptionnelle et être préparés à faire face à des conditions météorologiques extrêmes. L'altitude élevée entraîne également un risque significatif de mal aigu des montagnes (MAM), qui peut être mortel sans acclimatation et descente appropriées. <br/><br/>Outre les défis techniques, les alpinistes doivent être prêts à affronter le froid extrême, les vents violents et le risque d'avalanches. Le K2 est notoirement plus difficile et dangereux que l'Everest, avec un taux de mortalité plus élevé parmi ceux qui tentent l'ascension. La fenêtre d'ascension est également plus courte, généralement limitée à juillet et août, lorsque les conditions sont légèrement plus favorables.`"
    class="margin-top"
  />
  <contentText
    :content="`L'ascension du K2 est rarement une entreprise solitaire. Elle requiert une coordination étroite entre les membres de l'expédition, un soutien logistique solide, et souvent l'aide de guides locaux tels que les porteurs Balti. L'esprit d'équipe et la solidarité sont cruciaux, surtout face aux difficultés imprévues et aux décisions de vie ou de mort qui peuvent survenir en haute altitude. <br/><br/>En résumé, l'ascension est une quête qui pousse les limites de l'endurance humaine, exigeant non seulement une préparation physique et technique exceptionnelle mais aussi une force mentale, une capacité à travailler en équipe, et un profond respect pour la montagne et son environnement. C'est une aventure qui reste gravée dans la mémoire de ceux qui la tentent, qu'ils atteignent ou non le sommet.`"
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
    :info="`L’histoire`"
    :content="`La préservation du K2 et de son environnement alentour est cruciale non seulement pour maintenir la beauté naturelle et l'intégrité de l'une des régions montagneuses les plus emblématiques du monde, mais aussi pour protéger les écosystèmes fragiles et les communautés locales qui dépendent de cet environnement pour leur subsistance. <br/><br/>La région est située dans le Gilgit-Baltistan, une partie du Pakistan où des efforts de conservation sont en place pour protéger les paysages montagneux et leur biodiversité unique. Ces efforts comprennent la limitation de l'impact environnemental des expéditions d'escalade par la gestion des déchets, la réglementation des itinéraires d'ascension pour minimiser l'érosion et la dégradation des sentiers, et l'encouragement des pratiques de trekking et d'alpinisme responsables. <br/><br/>En somme, la préservation du K2 est un effort complexe qui nécessite la coopération internationale, le soutien local, et un engagement envers des pratiques durables pour garantir que cette montagne majestueuse reste un symbole de beauté naturelle et de défi humain pour les générations futures.`"
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
