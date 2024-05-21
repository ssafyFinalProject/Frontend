<script setup>
const props = defineProps(["boardInfo"]);

console.log(props.boardInfo);

// TODO : 부제목에 시간 추가?
</script>

<template>
  <!-- prepend-icon="$vuetify" -->
  <v-card
    class="mx-auto"
    color="secondary-variant"
    rel="noopener noreferrer"
    rounded="lg"
    variant="elevated"
    :subtitle="`${boardInfo.member.nickname} · ${boardInfo.view} views · ${boardInfo.date}`"
  >
    <!-- width="400" -->
    <template v-slot:title>
      <span class="font-weight-black">{{ boardInfo.title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ boardInfo.content }}
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
