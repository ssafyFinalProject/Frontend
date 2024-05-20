<script setup>
import { useRoute } from "vue-router/auto";
const route = useRoute();
const no = route.params.no;
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h4 font-weight-bold mt-4 mb-2">{{ no }}</h1>
      </div>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
