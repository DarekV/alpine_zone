<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import contentTextC from "/src/components/content_textc.vue";
import banner from "/src/components/banner.vue";
import contentTextL from "/src/components/content_textl.vue";
import contentText from "/src/components/content_text.vue";
import contentTravel from "/src/components/content_travel.vue";
import ContentImgText from "/src/components/content_img_text.vue";

import kangchenjungaHeaderImg from "/src/img/kangchenjunga_header_img.jpg";
import kangchenjunga1 from "/src/img/kangchenjunga_1.png";
import kangchenjunga2 from "/src/img/kangchenjunga_2.png";
import kangchenjunga3 from "/src/img/kangchenjunga_3.png";
import kangchenjunga4 from "/src/img/kangchenjunga_4.png";
import kangchenjunga5 from "/src/img/kangchenjunga_5.png";
import kangchenjunga6 from "/src/img/kangchenjunga_6.jpeg";
import kangchenjunga7 from "/src/img/kangchenjunga_7.jpeg";
</script>
<template>
  <headerVue
    :title="`kangchen<br/>junga`"
    :headerImg="kangchenjungaHeaderImg"
  />
  <description
    :title="`Vénéré comme un esprit`"
    :info="`La troisième montagne la plus haute du monde`"
    content="Le Kangchenjunga, trônant à 8 586 mètres, est le troisième plus haut sommet du monde, marquant la frontière entre le Népal et l'Inde. Vénéré par les populations locales comme un esprit de la montagne, le Kangchenjunga est réputé pour ses cinq pics neigeux et ses paysages à couper le souffle. Moins fréquenté que l'Everest ou le K2, il offre des défis uniques avec ses itinéraires complexes et ses conditions météorologiques imprévisibles."
  />
  <contentTextLImgR
    :title="`Une montagne sacrée respectée`"
    :info="`L’histoire`"
    :content="`Le nom 'Kangchenjunga' est dérivé des mots tibétains 'Kang-chen-dzo-nga', signifiant 'Les Cinq Trésors des Neiges, en référence aux cinq pics qui composent le massif du Kangchenjunga. Pour les habitants locaux, ces 'trésors' représentent les cinq dépôts de dieux, qui incluent l'or, l'argent, les gemmes, le grain et les livres sacrés. <br /><br />L'histoire de son exploration remonte au 19ème siècle, lorsque diverses expéditions européennes ont commencé à cartographier la région de l'Himalaya. Cependant, en raison de sa localisation éloignée et de son caractère sacré, les tentatives d'ascension n'ont commencé qu'au début du 20ème siècle. <br /><br />La première ascension réussie a eu lieu le 25 mai 1955 par une équipe britannique dirigée par Charles Evans. Joe Brown et George Band ont atteint le sommet, mais par respect pour les croyances locales qui considèrent le sommet comme sacré, ils se sont arrêtés à quelques mètres du vrai sommet, une tradition qui a souvent été respectée par les expéditions ultérieures.`"
    :img="kangchenjunga1"
    class="margin-top"
  />
  <contentTextC
    :title="`Préservation et culture`"
    :content="`La région du Kangchenjunga est également connue pour sa biodiversité exceptionnelle, incluant plusieurs parcs nationaux et zones protégées à la fois au Népal et en Inde. Les efforts de préservation visent à protéger les écosystèmes uniques tout en respectant les traditions culturelles des communautés locales.`"
    class="margin-top"
  />
  <contentText
    :content="`Aujourd'hui, il demeure un symbole de beauté naturelle, de diversité culturelle et d'aventure humaine. Les récits d'ascensions passées et les légendes locales continuent d'inspirer une fascination mondiale pour cette montagne majestueuse, soulignant l'importance de l'équilibre entre l'exploration et la conservation. <br/><br/>Son histoire est un témoignage de l'interaction entre l'homme et la nature, offrant des leçons précieuses sur le respect, le défi et la préservation de notre patrimoine naturel et culturel.`"
    class="margin-top"
  />
  <banner :imageUrl="kangchenjunga2"> </banner>
  <contentTextL
    :title="`L’ascension de la divinité`"
    :info="`L’ascension`"
    :content="`Il existe plusieurs itinéraires pour atteindre le sommet du Kangchenjunga, mais les deux principaux sont la voie du Sud-Est depuis le Népal et la voie du Nord-Ouest depuis l'Inde. Ces itinéraires traversent des terrains extrêmement variés, incluant des glaciers complexes, des arêtes acérées et de vastes champs de neige, exigeant des compétences en escalade sur glace et roche. <br/><br/>sa météo imprévisible et souvent extrême, avec des risques d'avalanches et de chutes de séracs. Les températures peuvent chuter bien en dessous de zéro, et les vents violents ajoutent un niveau supplémentaire de difficulté. L'altitude élevée et le manque d'oxygène imposent une acclimatation minutieuse pour éviter le mal aigu des montagnes. <br/><br/>Organiser une expédition nécessite une planification rigoureuse, incluant le transport de l'équipement, la gestion de la nourriture et du carburant, et la coordination avec les sherpas et autres guides locaux. Les camps de base et avancés doivent être soigneusement établis pour soutenir l'acclimatation et servir de points de repos.`"
  />
  <contentTextC
    :title="`Respect du sacré`"
    :content="`Par respect pour les croyances locales qui considèrent le sommet comme sacré, les alpinistes qui atteignent le haut du Kangchenjunga s'arrêtent traditionnellement à quelques mètres du sommet véritable. Cette pratique souligne l'importance de respecter les traditions et la culture des communautés locales dans les expéditions en haute montagne.`"
    class="margin-top"
  />
  <contentTravel
    :img="kangchenjunga5"
    :title="`01. Trek d'Approche`"
    :content="`De Taplejung au Camp de Base : L'aventure commence par un trek de plusieurs jours depuis Taplejung, traversant des forêts subtropicales luxuriantes et des villages authentiques pour atteindre le camp de base situé à environ 5 400 mètres. Cette approche permet une immersion dans la culture locale et une acclimatation progressive.`"
    :title2="`02. Acclimatation`"
    :content2="`Les grimpeurs passent du temps au camp de base à 5400 mètres pour s'acclimater à l'altitude. Cette phase comprend des rotations vers des camps supérieurs pour renforcer l'adaptation à des altitudes plus élevées et préparer le corps pour l'ascension.`"
    :title3="`03. Ascension principale`"
    :content3="`Camp 1 (6 200 m) : L'ascension commence en franchissant des glaciers et des pentes de neige pour atteindre le Camp 1, où les défis techniques débutent.<br/><br/>Camp 2 (6 700 m) : Situé sur une crête ou un plateau, ce camp sert de point d'arrêt clé avant les parties les plus exigeantes de l'ascension.<br/><br/>Camp 3 (7 400 m) : Ce camp est établi sur une position plus exposée, nécessitant une prudence accrue en raison des risques d'avalanches et de chutes de pierres.<br/><br/>Camp 4 (7 900 m) : Le dernier camp avant l'assaut final, positionné pour permettre l'attaque du sommet au petit matin.`"
    :img3="kangchenjunga6"
    :title4="`04. L'Assaut Final`"
    :content4="`Sommet (8 586 m) : L'ascension finale au Kangchenjunga est un test d'endurance, de technique et de volonté. Les grimpeurs doivent naviguer à travers des terrains mixtes de roche, de glace et de neige, en surmontant les derniers obstacles avant d'atteindre le sommet. En raison de son caractère sacré, beaucoup choisissent de s'arrêter juste avant le sommet véritable, respectant les croyances locales.`"
    :img4="kangchenjunga7"
    :title5="`05. Descente`"
    :content5="`La descente requiert une vigilance et une prudence extrêmes, les grimpeurs étant fatigués et les conditions pouvant changer rapidement. Retourner au camp de base en sécurité est la priorité, en suivant le même itinéraire utilisé lors de l'ascension.`"
    class="margin-top"
  />
  <banner :imageUrl="kangchenjunga3"> </banner>
  <contentImgText
    :info="`Préservation`"
    :content="`La préservation du Kangchenjunga est d'une importance cruciale, non seulement en raison de son statut de troisième plus haut sommet du monde mais aussi en tant que foyer d'une biodiversité exceptionnelle et d'une riche héritage culturel. Situé à la frontière entre le Népal et l'Inde, le Kangchenjunga est entouré de zones protégées qui jouent un rôle clé dans la conservation de ses écosystèmes uniques et dans le soutien des communautés locales. <br/><br/>Il abrite une variété d'habitats, allant des forêts subtropicales aux glaciers, qui soutiennent une faune et une flore diversifiées. Des espèces rares et menacées, telles que le léopard des neiges, le panda roux et divers types de rhododendrons, sont présentes dans cette région. Les efforts de conservation visent à protéger ces espèces en minimisant l'impact humain sur leurs habitats naturels. <br/><br/>Cela englobe également la protection de son importance culturelle pour les peuples indigènes. Les montagnes sont considérées comme sacrées, et les traditions et les croyances associées à elles doivent être respectées. Les efforts de conservation cherchent à intégrer les connaissance s et les pratiques traditionnelles dans la gestion de l'environnement. <br/><br/>En somme, la préservation du Kangchenjunga est essentielle pour maintenir l'équilibre entre la conservation de la nature et le développement culturel et économique des régions qui l'entourent.`"
    :img="kangchenjunga4"
    class="content-img-text"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
