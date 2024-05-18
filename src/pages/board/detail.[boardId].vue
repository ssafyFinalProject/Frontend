<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router/auto";
defineProps({
  boardInfo: Object,
});

const dummy = ref([
  {
    title: "댓글 제목",
    subtitle: "댓글 부제목",
  },
  {
    title: "댓글 제목",
    subtitle: "댓글 부제목",
  },
  {
    title: "댓글 제목",
    subtitle: "댓글 부제목",
  },
  {
    title: "댓글 제목",
    subtitle: "댓글 부제목",
  },
]);

const route = useRoute();
const boardId = ref(route.params.boardId);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-main-board-detail-card :boardInfo="boardInfo" />
      <v-divider class="mt-4 mb-4"></v-divider>
      <view-main-comment-card
        v-for="item in dummy"
        :key="item.title"
        :commentInfo="item"
      ></view-main-comment-card>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
