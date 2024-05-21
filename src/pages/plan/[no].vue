<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router/auto";
const route = useRoute();
const no = route.params.no;

const items = ref([
  { id: 1, color: "primary", icon: "mdi-account", date: "2021-01-01" },
  { id: 2, color: "secondary", icon: "mdi-account", date: "2021-02-01" },
  { id: 3, color: "accent", icon: "mdi-account", date: "2021-03-01" },
  { id: 4, color: "error", icon: "mdi-account", date: "2021-04-01" },
  { id: 5, color: "warning", icon: "mdi-account", date: "2021-05-01" },
  { id: 6, color: "info", icon: "mdi-account", date: "2021-06-01" },
  { id: 7, color: "success", icon: "mdi-account", date: "2021-07-01" },
]);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-timeline side="end">
        <v-timeline-item
          v-for="item in items"
          :key="item.id"
          :dot-color="item.color"
          size="small"
        >
          <view-plan-time-line-card />
        </v-timeline-item>
      </v-timeline>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
