<script setup>
import { defineProps } from "vue";

const props = defineProps({
  quote: String,
  info: String,
  content: String,
});
</script>
<template>
  <v-container class="v-container-margin">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3" class="quote-container">
        <p class="quote" v-html="quote"></p>
        <p class="info">
          {{ info }}
        </p>
      </v-col>
      <v-col class="content" cols="11" offset="1" sm="5" offset-sm="4">
        <p v-html="content"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.quote-container {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.info {
  margin-top: 15px;
}

.quote {
  font-size: 40px;
  font-family: var(--font-family-bold);
  line-height: 44px;
}

.content {
  padding-top: 18px;
}

@media screen and (max-width: 900px) {
  .quote {
    font-size: 30px;
    line-height: 34px;
  }
}
</style>
