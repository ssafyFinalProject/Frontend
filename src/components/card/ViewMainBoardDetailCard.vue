<script setup>
defineProps({
  boardInfo: Object,
});

const dummy = {
  boardId: 1,
  title: "관통 프로젝트 ㅈㄴ 힘들면 개추 ㅋㅋ",
  content:
    "아 이거 끝이 안보이는데 언제까지 해야되냐 ㅋㅋㅋㅋㅋㅋ 시간이 너무 없네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ시간이 너무 없네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ시간이 너무 없네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ시간이 너무 없네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  view: 1234,
  memberId: 1,
  nickname: "user1",
};
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
    :subtitle="`${dummy.nickname} · ${dummy.view} views · ${dummy.createdAt}`"
  >
    <!-- width="400" -->
    <template v-slot:title>
      <span class="font-weight-black">{{ dummy.title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ dummy.content }}
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
