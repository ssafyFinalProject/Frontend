<script setup>
import { makeBoard } from "@/api/board";
import { useRouter } from "vue-router/auto";

const router = useRouter();

const getContent = (item) => {
  makeBoard(
    {
      title: item.title,
      content: item.content,
    },
    () => {
      window.alert("글이 작성되었습니다.");
      router.push({ path: "/board" });
    },
    (error) => {
      window.alert("글 작성에 실패했습니다.");
      console.log(error);
    }
  );
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
