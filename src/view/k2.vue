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

import headerImg from "/src/optimized/k2_header_img.webp";
import img1 from "/src/optimized/k2_1.webp";
import img2 from "/src/optimized/k2_2.webp";
import img3 from "/src/optimized/k2_3.webp";
import img4 from "/src/optimized/k2_4.webp";
import img5 from "/src/optimized/k2_5.webp";
import img6 from "/src/optimized/k2_6.webp";
import img7 from "/src/optimized/k2_7.webp";
import img8 from "/src/optimized/k2_8.webp";
</script>
<template>
  <headerVue :title="`k2`" :headerImg="headerImg" />
  <description
    :title="`La montagne sauvage`"
    :info="`Le sommet le plus mortel`"
    content="Le K2, s'élevant à 8 611 mètres, est le deuxième plus haut sommet du monde et est situé sur la frontière entre le Pakistan et la Chine. Connu pour être techniquement plus exigeant que l'Everest, le K2 est surnommé la 'Montagne Sauvage' en raison de ses conditions météorologiques imprévisibles et de ses pentes abruptes. Les alpinistes qui s'y aventurent doivent faire face à des risques élevés d'avalanches, de chutes de pierres et de tempêtes soudaines. Avec un taux de réussite et de survie inférieur à celui de l'Everest, le K2 est respecté dans la communauté de l'alpinisme comme l'un des défis les plus difficiles et les plus dangereux. <br/> <br/>C’est la montagne avec le plus haut taux de décès avoisinant les 20%."
  />
  <contentTextLImgR
    :title="`Une histoire semée d’embuche`"
    :info="`L’histoire`"
    :content="`La première ascension réussie du K2 fut réalisée le 31 juillet 1954 par Achille Compagnoni et Lino Lacedelli, membres d'une expédition italienne dirigée par Ardito Desio. Cette victoire fut le résultat de plusieurs tentatives précédentes et marqua une étape majeure dans l'histoire de l'alpinisme. L'exploit démontra non seulement le courage et la détermination des grimpeurs mais souligna également les défis techniques et physiques uniques posés par le K2. <br/><br/>Son histoire est également marquée par des moments de tragédie, comme l'expédition désastreuse de 1986, où treize grimpeurs perdirent la vie au cours d'une saison d'été particulièrement meurtrière. Ces événements tragiques mettent en lumière les risques extrêmes auxquels sont confrontés les alpinistes sur le K2, renforçant son statut de montagne impitoyable.`"
    :img="img1"
    class="margin-top"
  />
  <contentTextC
    :title="`Une femme au sommet`"
    :content="`Wanda Rutkiewicz, une alpiniste polonaise de renom, fut la première femme à atteindre le sommet du K2 le 23 juin 1986, sans l'utilisation d'oxygène supplémentaire. Son ascension a ouvert la voie à d'autres femmes alpinistes, démontrant que les défis du K2 ne connaissent pas de frontières de genre.`"
    class="margin-top"
  />
  <banner :imageUrl="img3"> </banner>
  <contentImgLTextR
    :title="`L’ascension`"
    :info="`L’ascension`"
    :img="img2"
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
    :img="img4"
    :title="`01. Approche et Acclimatation`"
    :content="`Les alpinistes débutent leur aventure par une longue marche d'approche à travers le glacier de Baltoro, atteignant le camp de base situé à environ 5 000 mètres. Cette phase inclut également des périodes d'acclimatation pour s'adapter à l'altitude élevée, essentielles pour minimiser le risque de mal aigu des montagnes (MAM).`"
    :title2="`02. Camp de Base au Camp 1`"
    :content2="`L'ascension commence véritablement avec le trajet du camp de base au Camp 1. Cet itinéraire traverse des terrains glaciaires complexes, nécessitant la navigation entre crevasses et blocs de glace. La route est exigeante physiquement et techniquement, préparant les grimpeurs pour les défis à venir.`"
    :title3="`03. Camp 1 au Camp 2`"
    :content3="`Cette étape à 6700 mètres implique l'escalade de pentes raides et souvent de neige profonde, avec des risques d'avalanches. Le Camp 2 est établi sur un emplacement relativement sûr, offrant un point de repos avant les sections les plus techniques de l'ascension.`"
    :img3="img7"
    :title4="`04. Camp 2 au Sommet`"
    :content4="`De là (7300 mètres), les alpinistes affrontent le “Bottleneck“, un couloir étroit et dangereux situé juste en dessous du sommet, réputé pour être le passage le plus périlleux de l'ascension avec un risque élevé de chutes de séracs. Cette étape finale jusqu'au sommet demande une maîtrise exceptionnelle de l'escalade en haute altitude, du courage et une détermination inébranlable.`"
    :img4="img8"
    :title5="`05. Descente`"
    :content5="`La descente est souvent considérée comme plus périlleuse que l'ascension en raison de la fatigue accumulée, des risques de changement rapide des conditions météorologiques, et de la navigation à travers les passages dangereux en descente. Retourner en sécurité au camp de base exige une concentration constante, une gestion prudente de l'énergie et un respect scrupuleux des procédures de sécurité.`"
    class="margin-top"
  />
  <banner :imageUrl="img5"> </banner>
  <contentImgText
    :info="`Préservation`"
    :content="`La préservation du K2 et de son environnement alentour est cruciale non seulement pour maintenir la beauté naturelle et l'intégrité de l'une des régions montagneuses les plus emblématiques du monde, mais aussi pour protéger les écosystèmes fragiles et les communautés locales qui dépendent de cet environnement pour leur subsistance. <br/><br/>La région est située dans le Gilgit-Baltistan, une partie du Pakistan où des efforts de conservation sont en place pour protéger les paysages montagneux et leur biodiversité unique. Ces efforts comprennent la limitation de l'impact environnemental des expéditions d'escalade par la gestion des déchets, la réglementation des itinéraires d'ascension pour minimiser l'érosion et la dégradation des sentiers, et l'encouragement des pratiques de trekking et d'alpinisme responsables. <br/><br/>En somme, la préservation du K2 est un effort complexe qui nécessite la coopération internationale, le soutien local, et un engagement envers des pratiques durables pour garantir que cette montagne majestueuse reste un symbole de beauté naturelle et de défi humain pour les générations futures.`"
    :img="img6"
    class="content-img-text"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
