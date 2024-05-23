<template>
  <v-card>
    <v-img
      :src="search.img || 'https://placehold.co/600x400/sky/white?text=:)'"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title class="pb-0 text-white">{{ search.name }}</v-card-title>
      <v-card-subtitle class="mb-3 text-white">
        {{ search.address }}
      </v-card-subtitle>
    </v-img>

    <v-card-actions v-if="!isPlan">
      <v-spacer></v-spacer>
      <v-btn
        v-if="search.img"
        @click="doAddFavorite"
        :color="favorite ? 'red' : 'medium-emphasis'"
        icon="mdi-heart"
        size="small"
      ></v-btn>

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
const props = defineProps(["search", "favorite", "isPlan"]);
const emit = defineEmits(["goToMap", "addFavorite"]);

console.log("search", props.search);
const doGoToMap = () => {
  emit("goToMap", props.search);
};

const doAddFavorite = () => {
  emit("addFavorite", props.search);
};
</script>

<style scoped></style>
