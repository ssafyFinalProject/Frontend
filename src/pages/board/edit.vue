<script setup>
import { makeBoard } from "@/api/board";
import { useRouter } from "vue-router/auto";

const router = useRouter();

const getContent = (value) => {
  if (makeBoard(value)) {
    alert("글이 작성되었습니다.");
    router.push({ path: "/board" });
  } else {
    alert("글 작성에 실패했습니다.");
  }
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <h1 class="text-h5 font-weight-bold ms-3">글쓰기</h1>
      <view-board-content-input
        @send-content="getContent"
      ></view-board-content-input>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
