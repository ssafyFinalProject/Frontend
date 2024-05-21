<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in searchs" :key="item.id" :cols="4">
          <view-search-detail
            @add-favorite="doAddFavorite"
            @go-to-map="doGoToMap"
            :search="item"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["searchs"]);
const emit = defineEmits(["goToMap", "addFavorite"]);

const doGoToMap = (search) => {
  emit("goToMap", search);
};

const doAddFavorite = (search) => {
  console.log(search);
  emit("addFavorite", search);
};
</script>

<style scoped></style>
