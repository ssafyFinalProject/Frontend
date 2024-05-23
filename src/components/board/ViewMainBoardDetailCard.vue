<template>
  <v-card
    class="mx-auto"
    color="secondary-variant"
    rel="noopener noreferrer"
    rounded="lg"
    variant="solo"
    :subtitle="`${boardInfo.member.nickname} · ${boardInfo.view} views · ${boardInfo.date}`"
  >
    <!-- width="400" -->
    <template v-slot:title>
      <div class="d-flex justify-space-between align-center">
        <span class="text-h5 font-weight-black">{{ boardInfo.title }}</span>
        <v-icon @click="doRemoveBoard">mdi-delete</v-icon>
      </div>
    </template>

    <v-card-text class="text-body-1 bg-surface-light pt-4 ms-2 me-2">
      {{ boardInfo.content }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps(["boardInfo"]);

const emit = defineEmits(["removeBoard"]);
const doRemoveBoard = () => {
  emit("removeBoard", props.boardInfo.boardId);
};
</script>

<style scoped></style>
