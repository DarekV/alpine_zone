<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import banner from "/src/components/banner.vue";
import contentText from "/src/components/content_text.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import topHeaderImg from "/src/optimized/top_header_img.webp";
import top3Img from "/src/optimized/top_3.webp";
import top2Img from "/src/img/top_2.webp";
import top1Img from "/src/optimized/top_1.webp";
</script>
<template>
  <headerVue
    :title="`“Sur l’Everest,<br/> j’ai enjambé<br/>des cadavres“`"
    :headerImg="topHeaderImg"
  />
  <description
    :title="`Un triste bilan`"
    :info="`Par Julie Mcelvey`"
    content="Cette année, la zone de la mort n’a jamais aussi bien porté son nom. Cette saison 2023, qui a marqué les 70 ans de la première ascension de l'Everest, a enregistré un nombre record de permis de grimper: 478. Mais les décès ont aussi augmenté. La saison s'est achevée, fin mai, sur le triste bilan de douze morts et de cinq disparus."
  />
  <contentTextLImgR
    :title="`Le départ`"
    :info="`introduction`"
    :content="`La description que Julie fait de son évolution dans la zone de la mort en compagnie de son guide Tendi Sherpa, 20 ans d’expérience et qui s'apprête à enregistrer son 15ème sommet, prend alors une toute autre tournure. “Soudain, j’aperçois un sherpa qui porte un alpiniste sur son dos. Tendi me précise qu’il est vivant, qu’il s'agit d’un sauvetage. Il ajoute avec certitude que l’homme va s’en tirer. Nous avons vu plusieurs cadavres durant notre ascension. Tendi sait que cela est très éprouvant pour moi d’être confrontée à une telle vision.“`"
    :img="top3Img"
    class="margin-top"
  />
  <contentTextC
    :title="`Le risque d'y passer`"
    :content="`Après avoir marché plusieurs heures dans la nuit, la cordée assiste à un magnifique lever de soleil. Le sommet n’est plus très loin. Mais à cette altitude, la vie ne tient qu'à un fil. L'alpiniste américaine ne parvient plus à respirer. Le régulateur de sa bouteille d’oxygène est gelé. “Le souffle coupé, je me suis écroulée par terre et j’ai prié“. Tendi agit aussi vite que possible, car Julie Mckelvey est sur le point de perdre connaissance.<br/><br/>Peu avant d’arriver au niveau de l’arête sommitale, le guide népalais ordonne à Julie de maintenir son regard fixe en direction de la crête et de ne tourner la tête sous aucun prétexte. L’Américaine comprend alors qu’un autre corps sans vie gît à quelques mètres d’elle. Une mort qu’elle qualifiera dans son récit de “toute fraîche“. Un énième alpiniste, abandonné par ses compagnons à une centaine de mètres du sommet.<br/><br/>Au point culminant de la Terre, une dizaine de personnes jouent des coudes pour immortaliser l’instant de toute une vie. Le premier geste de Julie est de dévisser un petit tube en métal duquel elle laisse échapper les cendres de sa mère.`"
    class="margin-top"
  />
  <banner :imageUrl="top2Img"> </banner>
  <contentImgLTextR
    :title="`Une descente pas plus facile`"
    :info="``"
    :img="top1Img"
    :content="`Une fois l'ascension terminée, les efforts ne sont pas terminés: il reste la descente, que l'alpiniste américaine appréhende. “Il fait très froid, nous sommes limités en oxygène. Nous devons redescendre. Tendi me dit d’exécuter un tour complet sur moi-même pour prendre conscience de l'endroit où je me trouve. La vue est à couper le souffle. C’est uniquement à ce moment-là que je me suis rendu compte de ce que j’avais accompli. Je suis remplie de fierté et de gratitude, mais aussi inquiète à l'idée de redescendre, car je suis épuisée et le plus dur reste à faire.“<br/><br/>Julie Mckelvey poursuit. “Lorsque nous arrivons enfin au Camp IV, à nouveau nous tombons sur un corps, laissé à proximité de la corde fixe, enveloppé dans un sac de couchage. Je distingue une partie de son visage et de ses mains. Je m'effondre complètement - je réalise maintenant à quel point ce que je viens de faire était incroyablement dangereux.“`"
    class="margin-top"
  />
  <contentText
    :content="`“Tant de personnes sont mortes ou ont été blessées cette saison. C’est le quatrième cadavre que je vois pour ne pas dire que j’enjambe. Une fois que vous voyez ce genre de scène, vous ne pouvez plus vous l’enlever de votre esprit. Je suis si triste pour ces personnes et pour leur famille. Au camp de base, j’ai entendu dire qu’une personne qui s'est retrouvée à court d'oxygène au sommet est devenue délirante et a sauté dans le vide“, termine-t-elle.`"
    class="margin-top"
  />
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
