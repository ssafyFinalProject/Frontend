<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h1>{{ route.params }}</h1>
  </div>
</template>

<style scoped></style>
