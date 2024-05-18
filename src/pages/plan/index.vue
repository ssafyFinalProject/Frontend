<script setup>
import { ref } from "vue";

const dummy = ref([
  {
    no: 1,
    title: "View",
    subtitle: "View",
    desc: "View",
  },
  {
    no: 2,
    title: "View",
    subtitle: "View",
    desc: "View",
  },
  {
    no: 3,
    title: "View",
    subtitle: "View",
    desc: "View",
  },
  {
    no: 4,
    title: "View",
    subtitle: "View",
    desc: "View",
  },
]);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <ViewMainPlanCard
          v-for="plan in dummy"
          :key="plan.title"
          :plan="plan"
        />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
