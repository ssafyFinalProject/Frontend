<template>
  <v-card>
    <v-img
      :src="search.src"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title class="pb-0">{{ search.name }}</v-card-title>
      <v-card-subtitle class="mb-3"> {{ search.address }} </v-card-subtitle>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="medium-emphasis" icon="mdi-heart" size="small"></v-btn>
      <v-btn
        @click="doGoToMap"
        color="medium-emphasis"
        icon="mdi-map"
        size="small"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["search"]);
const emit = defineEmits(["goToMap"]);

const doGoToMap = () => {
  emit("goToMap", props.search);
};
</script>

<style scoped></style>
