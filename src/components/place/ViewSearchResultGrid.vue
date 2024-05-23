<template>
  <v-card class="mx-auto ms-1 me-1 mt-1 mb-1">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in searchs" :key="item.id" :cols="4">
          <view-search-detail-card
            @add-favorite="doAddFavorite"
            @go-to-map="doGoToMap"
            :search="item"
            :favorite="favorites.has(item.placeId)"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const props = defineProps(["searchs", "favorites"]);
const emit = defineEmits(["goToMap", "addFavorite"]);

const doGoToMap = (search) => {
  emit("goToMap", search);
};

const doAddFavorite = (search) => {
  emit("addFavorite", search);
};
</script>

<style scoped></style>
