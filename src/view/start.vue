<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import banner from "/src/components/banner.vue";
import contentTextC from "/src/components/content_textc.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import startHeaderImg from "/src/optimized/start_header_img.webp";
import start1Img from "/src/optimized/start_1.webp";
import start2Img from "/src/optimized/start_2.webp";
import start3Img from "/src/optimized/start_3.webp";
import start4Img from "/src/optimized/start_4.webp";
</script>
<template>
  <headerVue
    :title="`Se mettre<br/>à l'alpinisme`"
    :headerImg="startHeaderImg"
  />
  <description
    :title="`Correctement commencer l’alpinisme`"
    :info="``"
    content="Benjamin Verlière vous explique comment vous lancer dans l'alpinisme étape par étape, et passe en revue quelques sommets français sur lesquels vous pourrez tenter de repousser vos limites."
  />
  <contentImgLTextR
    :title="`Commencer avec de la rendonnée`"
    :info="`Benjamin Verlière`"
    :img="start1Img"
    :content="`Ce n'est pas un secret, l'alpinisme est une activité risquée. Il convient donc d'adopter une démarche graduelle, en commençant par s'adonner à la randonnée, qui peut-être catégorisée en trois grandes familles : la randonnée champêtre (relativement plat), la randonnée de montagne (avec peu de dénivelé), et la randonnée de montagne qui comporte du dénivelé positif important.<br/><br/>“Avant de de lancer en alpinisme, la première étape consiste donc à s’habituer au dénivelé positif avec des petites randonnées de nature au début, puis en montant progressivement dans des randonnées de montagne plus longues“, explique Benjamin Verlière.“ Pour ce faire, je conseille donc de commencer par des petites marches quotidiennes qu’on allonge petit à petit.<br/><br/>L'objectif final étant de réussir à faire des randonnées avec plus de 1000 mètres de dénivelé positif sur une vingtaine de kilomètres. Si vous êtes dans une région qui le permet, comme les Alpes, par exemple, vous pouvez essayer de faire ces randonnées en haute montagne, puisqu'il existe des sommets situés à plus de 2500 mètres d'altitude et qui ne sont pas considérés comme de l’alpinisme.`"
    class="margin-top"
  />
  <contentTextC
    :title="`Passer aux choses sérieuses`"
    :content="`“Une fois que vous avez passé ces étapes, vous êtes prêt à faire votre première sortie alpine“, poursuit-il. “À partir de ce moment-là, je vous conseille de faire vos premières sorties avec un guide ou un professionnel, ce qui vous permettra de vous mettre en confiance. Ces professionnels sont là pour votre sécurité et pour vous permettre d’atteindre votre sommet avec le moins de difficulté possible, l’idéal étant de faire un premier sommet facile ou peu difficile.“ En voici quelques exemples :`"
    :listItems="[
      'Mont Blanc du Tacul, dans le massif du Mont-Blanc',
      'Dôme des Écrins, dans le massif des Écrins',
      'L’aiguille du Tour, dans le Massif du Mont Blanc',
      'Le Mont Blanc',
    ]"
    class="margin-top"
  />
  <banner :imageUrl="start2Img"></banner>
  <contentTextLImgR
    :title="`Connaître la difficulté d’un sommet`"
    :info="``"
    :content="`Attention,“la taille d’un sommet n’a rien à voir avec sa difficulté“, explique Benjamin Verlière. “L’Elbrouz, en Russie, que certains considèrent comme le plus haut sommet d’Europe, est côté F parce qu’il n’a aucune difficulté apparente, tout comme le Mont Blanc, dont la seule difficulté est la haute altitude. Le point culminant de Suisse, la Pointe Dufour, côté AD+, est un sommet beaucoup plus technique et difficile que le Mont Blanc et que l’Elbrouz, alors qu’il est plus petit. Ses pentes sont en revanches beaucoup plus raides, il faut parfois escalader pour pouvoir grimper, et on y trouve beaucoup de crevasses. Toutes ces séries de difficultés rendent l’ascension plus technique.“<br/><br/>Comment connaître la difficulté des sommets ? Grâce à leur système de cotation, allant de F, pour facile, à ED, pour extrêmement difficile.`"
    :img="start3Img"
    :listItems="[
      'F = Facile',
      'PD = Peu Difficile',
      'AD = Assez Difficile',
      'D = Difficile',
      'TD = Très Difficile',
      'ED = Extrêmement Difficile',
    ]"
    class="margin-top"
  />
  <contentTextC
    :title="`Bien se préparer`"
    :content="`“Une très grande partie du travail de l'alpiniste consiste à faire beaucoup de recherches en amont sur la montagne qu’il souhaite gravir afin de bien la visualiser, que ce soit sur internet ou dans des livres“, confirme-t-il. “Quand on se lance en alpinisme, il est essentiel d’apprendre à lire les courbes d’une montagne et c’est d’ailleurs quelque chose à laquelle on peut s’exercer en faisant de la randonnée. C’est quelque chose qui prend du temps et c'est pourquoi il est essentiel de faire ses premières sorties avec un professionnel qui pourra vous apprendre ces notions.“<br/><br/>D'un point de vue physique, une préparation bien spécifique est primordiale. “Lorsqu’on commence à faire des sorties en haute montagne, il y a un aspect physique qui est difficile à maîtriser, c’est le mal des montagnes, qui généralement commence à toucher les gens à partir de 3000-3500 mètres, et qui est simplement dû au manque d’oxygène dans l’air“, explique Benjamin Verlière. “Si vous souhaitez tenter un sommet à plus de 4000 mètres d’altitude, c’est opportun d’avoir au préalable tenté de s’acclimater, en ayant passé du temps à plus de 3000 mètres pour que le corps s’habitue à ce manque d’oxygène.“`"
    class="margin-top"
  />
  <contentImgLTextR
    :title="`Les 3 règles d’or`"
    :info="``"
    :img="start4Img"
    :content="`Ne jamais hésiter à faire demi-tour : “Vous pouvez vous trouvez à 50 mètres du sommet, si ça ne va pas, si vous ne le sentez pas, si vous vous sentez mal, si les conditions ne sont pas bonnes, vous faites demi tour.“<br/><br/>On ne conquiert jamais un sommet, on ne conquiert que soi-même : “L'alpiniste est là pour le dépassement de soi, il est là pour respecter son adversaire qui est la montagne et doit faire preuve d'humilité.“<br/><br/>Ne pas polluer : “Si on est prêt à laisser des déchets derrière soi simplement pour atteindre un sommet, c’est qu’on n’est pas digne de le faire.“`"
    class="margin-top"
  />
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
