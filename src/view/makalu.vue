<script setup>
import headerVue from "/src/components/header.vue";
import description from "/src/components/description.vue";
import contentTextLImgR from "/src/components/content_textl_imgr.vue";
import contentTextC from "/src/components/content_textc.vue";
import banner from "/src/components/banner.vue";
import contentQuote from "/src/components/content_quote.vue";
import contentText from "/src/components/content_text.vue";
import contentTravel from "/src/components/content_travel.vue";
import ContentImgText from "/src/components/content_img_text.vue";
</script>
<template>
  <headerVue :title="`Makalu`" :headerImg="`/src/img/makalu_header_img.png`" />
  <description
    :title="`Une des plus redoutée`"
    :info="`L’un des défit d’escalade les plus difficiles`"
    content="Le Makalu, avec son sommet culminant à 8 485 mètres, est le cinquième plus haut sommet du monde. Situé dans la région du Mahalangur Himal, à la frontière entre le Népal et le Tibet, le Makalu est célèbre pour sa forme pyramidale presque parfaite et ses pentes abruptes, ce qui en fait un des sommets les plus difficiles et les plus redoutés par les alpinistes."
  />
  <contentTextLImgR
    :title="`La montagne isolée`"
    :info="`L’histoire`"
    :content="`L'histoire de l'exploration du Makalu commence au milieu du 20e siècle. Les premières tentatives d'ascension ont mis en évidence les défis techniques et physiques posés par cette montagne isolée. <br/><br/>La première ascension réussie a été réalisée le 15 mai 1955 par une équipe française dirigée par Jean Franco. Lionel Terray et Jean Couzy ont atteint le sommet, marquant un moment important dans l'histoire de l'alpinisme. Cette réussite a ouvert la voie à de futures expéditions, chacune ajoutant à la richesse de l'histoire d'ascension du Makalu.`"
    :img="`/src/img/makalu_1.png`"
    class="margin-top"
  />
  <contentTextC
    :title="`L’importance culturelle`"
    :content="`Comme beaucoup de sommets de l'Himalaya, le Makalu possède une grande signification culturelle pour les peuples autochtones de la région. Il est souvent considéré comme un être sacré, avec des croyances et des traditions qui soulignent le respect de la montagne et de son environnement. <br/><br/>La conservation de sa région environnante est essentielle pour protéger sa biodiversité unique et les écosystèmes fragiles. Le parc national de Makalu-Barun, qui entoure la montagne, joue un rôle crucial dans ces efforts de conservation, en protégeant une large gamme de faune et de flore, ainsi que les ressources en eau vitales pour les communautés locales.`"
    class="margin-top"
  />
  <contentText
    :content="`Le Makalu continue d'attirer les alpinistes du monde entier, chacun cherchant à relever les défis uniques que présente cette montagne. Avec la croissance du tourisme de montagne, la gestion durable des expéditions et la minimisation de l'impact environnemental sont devenues des priorités pour assurer que le Makalu reste un symbole de la beauté naturelle et de l'aventure humaine pour les générations futures. <br/><br/>En conclusion, il n'est pas seulement un test d'endurance et de compétence pour les alpinistes, mais aussi un rappel de l'importance de la préservation de l'environnement naturel et du respect des cultures locales. Son histoire, ses défis et sa beauté continuent de captiver et d'inspirer ceux qui s'aventurent dans l'Himalaya.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/makalu_2.png"> </banner>
  <contentQuote
    :quote="`« Je grimpe parce que<span> si je n’escalade pas, je tombe.</span> »`"
    :info="`Alex Honnold`"
    :content="`Le Makalu possède plusieurs itinéraires, mais l'itinéraire standard et le plus fréquemment utilisé est la Voie du Col Sud-Est. Cette route commence par une approche à travers le parc national de Makalu-Barun, offrant une immersion dans une biodiversité riche avant d'atteindre les défis glacés de la haute montagne. <br/><br/>Les principaux défis de l'ascension incluent la gestion de l'altitude extrême, la navigation sur des pentes glacées et la préparation à des conditions météorologiques imprévisibles. Le risque d'avalanches, de chutes de séracs et de mal aigu des montagnes (MAM) sont des préoccupations constantes.`"
    class="margin-top"
  />
  <contentTravel
    :img="'/src/img/makalu_3.png'"
    :title="`01. Trek d'Approche`"
    :content="`De Tumlingtar au Camp de Base : L'aventure commence avec un trek depuis Tumlingtar, traversant des villages reculés et des forêts denses, jusqu'au camp de base situé à environ 4 800 mètres. Cette approche permet une acclimatation graduelle et offre une immersion dans la nature exceptionnelle du Makalu.`"
    :title2="`02. Acclimatation`"
    :content2="`Camp de Base (4 800 m) : Les grimpeurs passent du temps au camp de base pour s'acclimater à l'altitude. Cette phase inclut des rotations vers les camps supérieurs pour adapter le corps aux hautes altitudes et se préparer pour les défis à venir.`"
    :title3="`03. Ascension principale`"
    :content3="`Camp 1 (6 100 m) : La route vers le Camp 1 implique de traverser le glacier de Barun et de grimper des pentes de neige modérées. C'est la première étape dans la zone de haute altitude.<br/><br/>Camp 2 (6 600 m) : Situé sur une arête, ce camp requiert l'escalade de pentes raides et la navigation à travers des terrains mixtes de roche et de glace.<br/><br/>Camp 3 (7 400 m) : Ce camp est placé sur une pente plus abrupte, nécessitant des compétences techniques en escalade sur glace. C'est le point de préparation pour l'assaut final.<br/><br/>Camp 4 (7 800 m) : Le dernier camp avant le sommet, situé sur une crête exposée. De là, les alpinistes lancent leur tentative de sommet dans les premières heures avant l'aube.`"
    :img3="`/src/img/makalu_6.jpeg`"
    :title4="`04. L'Assaut Final`"
    :content4="`Sommet (8 485 m) : L'ascension finale est une épreuve d'endurance et de compétence technique, avec des sections de glace raide et des arêtes aériennes. Les grimpeurs doivent utiliser des cordes fixes et faire preuve d'une grande prudence pour atteindre le sommet du Makalu.`"
    :img4="`/src/img/makalu_7.jpeg`"
    :title5="`05. Descente`"
    :content5="`La descente suit le même itinéraire qu'à l'ascension et demande une grande vigilance, la fatigue et les conditions changeantes pouvant augmenter les risques d'accident. Retourner en sécurité au camp de base est une priorité absolue.`"
    class="margin-top"
  />
  <banner imageUrl="/src/img/makalu_4.png"> </banner>
  <contentImgText
    :info="`Préservation`"
    :content="`La préservation du Makalu, une montagne imposante et isolée au cœur de l'Himalaya, est essentielle tant pour la protection de son écosystème unique que pour le maintien de la beauté naturelle qui attire les alpinistes et les aventuriers du monde entier. En tant que partie intégrante du parc national de Makalu-Barun au Népal, le Makalu bénéficie d'efforts de conservation dédiés à la protection de sa faune et de sa flore diversifiées, ainsi qu'à la promotion d'un tourisme durable dans la région. <br/><br/>Le parc national de Makalu-Barun est un sanctuaire pour de nombreuses espèces rares et menacées, comme le léopard des neiges, le panda rouge et diverses espèces d'oiseaux et de plantes endémiques. La préservation de ce parc contribue à protéger ces habitats contre les menaces telles que le braconnage, la déforestation et les effets du changement climatique, qui peuvent altérer les précieux écosystèmes de la région. <br/><br/>Les efforts de conservation dans la région englobent également des initiatives visant à minimiser l'impact du tourisme de montagne. Les alpinistes sont encouragés à adhérer à des pratiques respectueuses de l'environnement, comme emporter tous les déchets hors de la montagne, utiliser des sources d'énergie renouvelables autant que possible et respecter les cultures et traditions locales. Ces mesures visent à réduire l'empreinte écologique des expéditions d'escalade et à assurer que les générations futures puissent également expérimenter la majesté du Makalu.`"
    :img="`/src/img/makalu_5.png`"
    class="content-img-text"
  >
  </contentImgText>
</template>
<style scoped>
.margin-top {
  margin-top: 300px;
}
</style>
