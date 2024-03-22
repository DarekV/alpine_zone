<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import about from "/src/components/about.vue";
import banner from "/src/components/banner.vue";
import contentText from "/src/components/content_text.vue";
import contentQuote from "/src/components/content_quote.vue";
import contentTextC from "/src/components/content_textc.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import ContentImgText from "/src/components/content_img_text.vue";
import zoneHeaderImg from "/src/optimized/zone_header_img.webp";
import aboutImg2 from "/src/optimized/everest_2.webp";
import aboutImg1 from "/src/optimized/everest_3.webp";
import zone1Img from "/src/optimized/zone_1.webp";
import zone2Img from "/src/optimized/zone_2.webp";
import zone3Img from "/src/optimized/zone_3.webp";
</script>
<template>
  <headerVue :title="`Jérôme<br/>Brisebourg`" :headerImg="zoneHeaderImg" />
  <description
    :title="`Dans la zone morte de l’Everest`"
    :info="`De Jérome Briesebourg`"
    content="Jerôme Brisebourg a 40 ans lorsqu’il décide de s’attaquer au sommet de l’Everest en mai 2011. Co-gérant d’une entreprise de formation, il pratique l’alpinisme en loisir depuis 2001. A son actif, le Mont-Blanc, le Kilimandjaro et le Kun en Inde qui dépasse les 7 000 mètres, avec une petite équipe d’amis soudés. Il nous raconte son expérience dans les derniers mètres de l’Everest."
  />
  <about
    :aboutImgLeft="aboutImg2"
    :aboutImgRight="aboutImg1"
    :aboutH2="`La zone morte c’est quoi?`"
    :aboutP="`Une altitude supérieure à 8000 mètres au-dessus du niveau de la mer est considérée comme la 'zone de la mort'. A cette altitude extrême, l'oxygène se fait plus rare dans l'atmosphère et les sportifs doivent généralement recourir à des bouteilles d'oxygène pour parvenir au bout de leur ascension. <br/><br/>Rester longtemps dans cette zone 'augmente les risques de gelures, de mal des montagnes et même de mort', a expliqué à l'AFP Ang Tsering Sherpa, ex-président de l'Association d'alpinisme du Népal. L'an dernier, cinq personnes avaient perdu la vie sur l'Everest.`"
    class="margin-top"
  />
  <contentTextC
    :title="`Par le côté tibétain`"
    :content="`L’assaut vers le sommet est lancé depuis le camp III à 8 200 mètres d’altitude. La progression se fait sur l’arête nord-est.
La difficulté réside dans les trois ressauts rocheux qu’il faut escalader entre 8300 et 8 847 mètres, où les embouteillages peuvent être importants. Mais très souvent, les sherpas ont au préalable équipé la montagne en installant sur ces ressauts de grandes échelles en aluminium et des cordes fixes. <br/><br/>L’équipe choisit l’approche depuis la voie nord par le Tibet. Moins fréquentée, moins dangereuse, et offrant une expédition à 22 000 euros bien moins onéreuse que depuis le Népal. <br/><br/>A 7 700 mètres, l’équipe attend une fenêtre météo favorable pour se lancer à l’assaut du sommet. Sept jours passent. « Pour certains cette incertitude fut difficile à gérer », dit Jérôme Brisebourg. « La délivrance et le stress » arrivent avec le soleil le 21 mai. Un seul jour, une seule tentative pour réussir.`"
    class="margin-top"
  />
  <contentImgLTextR
    :title="`Mon expérience`"
    :info="`Jérôme Brisebourg`"
    :img="zone1Img"
    :content="`« A partir de 7 700 mètres, on commence à prendre de l’oxygène avant de gagner le camp III à 8 200 mètres le matin vers 8 heures. On se repose quelques heures et puis, pendant plus de 30 heures, on ne va quasiment pas dormir. On quitte le camp III à 20h30 le même jour en direction du sommet pour éviter les embouteillages, car toutes les expéditions, soit plus de 100 personnes, se lancent à l’assaut du sommet ce jour-là.`"
    class="margin-top"
  />
  <banner :imageUrl="zone2Img"> </banner>
  <contentQuote
    :quote="`« Je m’était préparé à tout<span> sauf à voir des cadavres.</span> »`"
    :info="`Jérôme Brisebourg`"
    :content="`Les huit heures d’ascension vers le sommet me paraissent en durer deux. Je ne suis plus complètement lucide. On devait s’arrêter pour boire toutes les heures car la déshydratation est très importante en altitude. On s’est bien arrêté mais à chaque fois, on n’a jamais pensé à boire. Je suis dans un état second, comme m’observant en train de grimper. <br/><br/>Je progressais en tête. Soudain, j’aperçois une forme sur l’arête, un corps gelé. J’étais prêt à tout sauf à voir des cadavres. Il y avait peut-être une part de déni chez nous tous. Il fallait faire un écart pour l’éviter. Il était là depuis l’année dernière. Ça m’a renvoyé à moi-même et je me suis dit : “Mais qu’est-ce que je fous là ?” Comment peut-on apercevoir un cadavre alors qu’on n’aperçoit aucun danger apparent ? Ça m’a fait un choc. Je n’étais pas au bout de mes peines.`"
    class="margin-top"
  />
  <contentText
    :content="`Quelques centaines de mètres plus loin, j’aperçois des alpinistes en train de faire les poches d’un autre cadavre… C’est la famille qui avait demandé à ce qu’on récupère les effets personnels d’un alpiniste décédé la saison dernière. Il est bien trop dangereux de ramener le cadavre. <br/><br/>Quelques centaines de mètres plus loin, j’aperçois des alpinistes en train de faire les poches d’un autre cadavre… C’est la famille qui avait demandé à ce qu’on récupère les effets personnels d’un alpiniste décédé la saison dernière. Il est bien trop dangereux de ramener le cadavre. On finit par atteindre le sommet à l’aube. Je m’assieds pendant 15 minutes tout seul, sans bouger et la seule chose que je me suis dite c’est : “Putain, maintenant il faut redescendre !” J’avais prévu d’exhiber un t-shirt de mon entreprise mais je ne l’ai pas fait. J’ai quand même sorti un drapeau de mon sponsor, mais ma seule obsession c’était la redescente.`"
    class="margin-top"
  />
  <contentImgText
    :info="`un final réussit`"
    :content="` Je ne me rendais même pas compte que j’avais un orteil qui commençait à geler. Je savais que beaucoup d’accidents survenaient dans la descente, quand on a été puisé trop loin dans ses limites pour atteindre le sommet à tout prix. J’ai appris en redescendant qu’un alpiniste russe, d’une expédition partie devant nous et que j’ai croisé en montant, est mort sur l’arête, de fatigue. Ce n’était pas de la souffrance physique mais une vraie pénibilité. Même quand on arrive au sommet, l’objectif n’est pas atteint car l’objectif est de revenir au camp. Ma devise, c’était pas à pas jusqu’au camp de base. J’étais encore dans l’action pas dans la consécration. Ce n’est que plus tard que je me suis dit : “Ça y est, je l’ai fait !” »`"
    :img="zone3Img"
    class="margin-top"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
