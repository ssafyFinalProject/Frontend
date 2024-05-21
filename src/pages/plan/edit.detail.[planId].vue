<template>
  <div>Hello {{ planId }}</div>
</template>

<script setup>
import { useRoute } from "vue-router/auto";

const route = useRoute();
const planId = route.params.planId;
</script>
<style scoped></style>
