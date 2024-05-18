<script setup>
defineProps({
  boardInfo: Object,
});
</script>

<template>
  <v-col cols="6">
    <!-- :append-icon="boardInfo.icon" -->
    <v-card
      class="mx-auto py-4"
      color="secondary-variant"
      rel="noopener noreferrer"
      rounded="lg"
      variant="elevated"
      :title="boardInfo.title"
      :subtitle="`${boardInfo.nickname} · ${boardInfo.view} views`"
      :text="boardInfo.content"
      :to="`/board/detail/${boardInfo.boardId}`"
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
