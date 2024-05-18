<script setup>
defineProps({
  commentInfo: Object,
});
</script>

<template>
  <v-card
    class="py-4"
    color="surface-variant"
    rel="noopener noreferrer"
    rounded="lg"
    variant="text"
    :subtitle="commentInfo.subtitle"
    :title="commentInfo.title"
  >
  </v-card>
</template>

<style scoped></style>
