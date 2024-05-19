<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in searchs" :key="item.id" :cols="4">
          <view-search-detail :search="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["searchs"]);
</script>

<style scoped></style>
