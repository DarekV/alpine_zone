<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import banner from "/src/components/banner.vue";
import contentText from "/src/components/content_text.vue";
import contentTextC from "/src/components/content_textc.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
</script>
<template>
  <headerVue
    :title="`Un sauvetage<br/>Miracle`"
    :headerImg="`/src/img/save_header_img.jpeg`"
  />
  <description
    :title="`Le sherpa qui a sauvé un alpiniste`"
    :info="`Par Jessie Yeung`"
    content="Gelje Sherpa se dirigeait vers le sommet de la plus haute montagne du monde lorsqu'il a repéré l'alpiniste accroché à la corde.

Ils se trouvaient dans la « zone de la mort », une zone proche du sommet du mont Everest où les températures sont extrêmement basses et où il n’y a pas assez d’oxygène pour respirer sans aide pendant plus de quelques minutes."
  />
  <contentTextLImgR
    :title="`Le sauvetage`"
    :info="``"
    :content="`L'alpiniste, originaire de Malaisie, n'avait « rien » et était « sur le point de mourir », a déclaré jeudi le guide de montagne népalais de 30 ans à Anderson Cooper de CNN dans une interview. “Personne ne l'aidait, pas d'amis, pas d'oxygène, pas de Sherpas avec lui, pas de guides – donc c'est assez dangereux pour lui.“<br/><br/>D’autres alpinistes et guides « se sont uniquement concentrés sur le sommet », a-t-il déclaré – se méfiant de s’arrêter à une altitude où le corps se détériore rapidement et où se produisent de nombreux décès sur l’Everest.<br/><br/>Cette année déjà, 12 personnes sont mortes et cinq sont portées disparues sur l'Everest alors que la saison d'escalade printanière touche à sa fin, selon les autorités népalaises.`"
    :img="`/src/img/save_3.webp`"
    class="margin-top"
  />
  <contentTextC
    :title="`Les enjeux`"
    :content="`C'était une tâche presque impossible : Gelje a dû attacher le grimpeur sur son dos et le porter sur 600 mètres (1 900 pieds) pendant environ six heures avant qu'un autre guide ne se joigne aux secours, a rapporté Reuters.<br/><br/>Ils ont ensuite transporté à tour de rôle le grimpeur, enveloppé dans un matelas de couchage, devant parfois le traîner dans la neige, avant d'atteindre un hélicoptère qui les a transportés jusqu'au camp de base.<br/><br/>Le sauvetage, qui a eu lieu le 18 mai, a été « extrêmement difficile », a déclaré Gelje à CNN. Le Sherpa a déjà effectué plus de 55 sauvetages, dont certains très longs, mais a déclaré que c'était “le plus dur de ma vie“.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/save_2.jpg"> </banner>
  <contentImgLTextR
    :title="`Une saison mortelle`"
    :info="``"
    :img="`/src/img/save_1.jpg`"
    :content="`Cette saison d'escalade a été l'une des plus meurtrières jamais enregistrées, selon Bigyan Koirala, responsable du département du tourisme du Népal.<br/><br/>Le printemps est la meilleure période pour gravir l'Everest, même si certains alpinistes pourraient le faire pendant la saison d'automne, moins favorable. Il existe une brève période de temps – généralement après la mi-mai – pendant laquelle les températures sont plus chaudes et où les vents de haute altitude connus sous le nom de courant-jet se sont éloignés des montagnes.<br/><br/>Quatre Népalais et huit étrangers sont morts sur l'Everest ce printemps, selon Yubaraj Khatiwada, directeur du département du tourisme.Et parmi les cinq disparus, trois sont des Népalais et deux sont des étrangers.`"
    class="margin-top"
  />
  <contentText
    :content="`Gelje, le Sherpa, a déclaré qu'il y avait plusieurs raisons probables pour lesquelles cette saison a été si meurtrière. Le temps a été mauvais et extrêmement froid, et certains grimpeurs manquent d'expérience ou de formation suffisante pour atteindre une altitude aussi élevée.<br/><br/>Un guide de montagne avait alors déclaré à CNN que même avec de l'oxygène en bouteille, le corps humain ne pouvait survivre que pendant un certain nombre d'heures dans la zone de la mort, ce qui rendait les embouteillages potentiellement mortels.`"
    class="margin-top"
  />
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
