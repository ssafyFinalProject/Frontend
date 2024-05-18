<script setup>
import { useRoute } from "vue-router/auto";
const route = useRoute();
const no = route.params.no;

console.log(no);
</script>

<template>
  <div>
    <h1>{{ no }}!!!</h1>
  </div>
</template>

<style scoped></style>
