<script setup>
defineProps({
  cardInfo: Object,
});
</script>

<template>
  <v-col cols="6">
    <!-- prepend-icon="mdi-circle-small" -->
    <v-card
      class="py-4"
      color="surface-variant"
      rel="noopener noreferrer"
      rounded="lg"
      variant="text"
      :append-icon="cardInfo.icon"
      :subtitle="cardInfo.subtitle"
      :title="cardInfo.title"
      :to="cardInfo.link"
    >
      <v-overlay
        opacity=".06"
        scrim="primary"
        contained
        model-value
        persistent
      />
    </v-card>
  </v-col>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
