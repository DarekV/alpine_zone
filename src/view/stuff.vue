<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import banner from "/src/components/banner.vue";
import contentTextC from "/src/components/content_textc.vue";
import contentImgLTextR from "/src/components/content_imgl_textr.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import stuffHeaderImg from "/src/img/stuff_header_img.jpeg";
import stuff2Img from "/src/img/stuff_2.webp";
import stuff1Img from "/src/img/stuff_1.webp";
import stuff4Img from "/src/img/stuff_4.webp";
</script>
<template>
  <headerVue
    :title="`Le matériel<br/>d'alpinisme`"
    :headerImg="stuffHeaderImg"
  />
  <description
    :title="`Checklist équipement`"
    :info="``"
    content="Toucher les cimes, atteindre une crête, admirer le lever du soleil et le monde à ses pieds. L'alpinisme offre un subtil mélange d'aventure, d'effort, de convivialité et de cohésion avec la nature. Cette discipline sportive exaltante peut parfois impressionner mais les sentiments d'évasion, du dépassement de soi et du partage humain récompensent largement vos efforts ! Alors, avez-vous décidé de vous lancer dans cette aventure et de réaliser votre première course d'alpinisme dès cet été ? Posez-vous alors les bonnes questions ! "
  />
  <contentTextLImgR
    :title="`Pour commencer`"
    :info="`introduction`"
    :content="`Quel matériel emporter ? Comment s'habiller ? Êtes-vous trop équipé ou pas assez ? Il est indispensable de préparer son équipement minutieusement bien avant le jour J si vous souhaitez éviter les mauvaises surprises durant votre stage ou course d'alpinisme. Cette préparation est d’autant plus importante selon l’altitude, l’environnement, la météo ou encore le lieu où vous réalisez votre ascension. Une course d’alpinisme n'est pas une simple balade en moyenne montagne mais bel et bien une épreuve physique et mentale de premier plan. `"
    :img="stuff2Img"
    :listItems="[
      'Un sac à dos de 30 à 40 litres',
      'Un baudrier',
      'Un casque',
      'Un piolet',
      'Des crampons',
      'Des chaussures de montagne',
      'Des vêtements adaptés',
      'Des lunettes de soleil',
      'Une lampe frontale',
      'Des gants',
      'Un sac de couchage',
      'Une tente',
      'Un réchaud',
      'De la nourriture',
      'De l’eau',
    ]"
    class="margin-top"
  />
  <contentTextC
    :title="`Pas besoins de tout acheter`"
    :content="`“Si vous débutez en alpinisme, il n'est pas forcément indispensable d'acheter tout le matériel technique. Très souvent, les guides de haute montagne proposent des packs à la location avec l’équipement nécessaire à la course, en plus de vous fournir le casque et le baudrier dans la prestation. Cependant nous vous conseillons d'avoirs avec vous le matériel général de base:`"
    :listItems="[
      'Veste contre le vent et les intempéries, doudoune',
      'Pull polaire, veste softshell',
      'Chaussettes, sous-vêtements thermiques et sous-vêtements de rechange',
      'Polaire ou pull',
      '2 paires de gants (légers + chauds)',
      'Bonnet chaud et/ou bandeau',
      'Protection solaire (lunettes, crème solaire, casquette)',
      'Trousse de secours, couverture de survie',
      'Pique-nique, boissons, couteau',
      'Natel ou radio',
    ]"
    class="margin-top"
  />
  <banner :imageUrl="stuff1Img"> </banner>
  <contentImgLTextR
    :title="`Pour résumer`"
    :info="``"
    :img="stuff4Img"
    :content="`Le matériel d'alpinisme est crucial pour la sécurité et le succès de toute expédition en haute montagne. Il comprend une gamme variée d'équipements spécialement conçus pour faire face aux conditions extrêmes de l'altitude, du froid glacial et des terrains techniques.<br/><br/>Les éléments essentiels incluent des vêtements multicouches isolants et respirants pour réguler la température corporelle, des chaussures d'alpinisme robustes équipées de crampons pour la traction sur glace et neige, ainsi qu'un piolet et des cordes pour l'escalade et la sécurisation sur les pentes raides.<br/><br/>Les casques, harnais, et systèmes d'ancrage offrent une protection contre les chutes, tandis que les lunettes de glacier et la crème solaire protègent contre les rayons UV intenses en altitude. De plus, des équipements spécifiques comme les tentes de haute montagne, les sacs de couchage résistants au froid extrême, et les réchauds portables sont indispensables pour le repos et la récupération dans l'environnement inhospitalier des hautes altitudes.<br/><br/>Choisir le matériel d'alpinisme de qualité et savoir l'utiliser correctement peut faire la différence entre une ascension réussie et une situation périlleuse en montagne.`"
    class="margin-top"
  />
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
