<template>
  <v-app>
    <main-drawer v-if="isValid" />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router/auto";

const route = useRoute();

const isValid = computed(() => {
  const path = route.path;
  console.log(!(path === "/signup" || path === "/login"));
  return !(path === "/signup" || path === "/login");
});
</script>
