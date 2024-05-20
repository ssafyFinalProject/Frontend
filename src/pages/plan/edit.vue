<script setup>
import { useRouter } from "vue-router/auto";

const router = useRouter();

const getContent = (item) => {
  // makeBoard(
  //   {
  //     title: item.title,
  //     content: item.content,
  //   },
  //   () => {
  //     router.push({ path: "/board" });
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <h1 class="text-h5 font-weight-bold ms-3">계획하기</h1>
      <view-board-content-input
        @send-content="getContent"
      ></view-board-content-input>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
