<script setup>
import { useRouter } from "vue-router/auto";
import { registPlan } from "@/api/plan";
const router = useRouter();

const getContent = (item) => {
  registPlan(
    {
      name: item.title,
      content: item.content,
      planDay: "2024-01-01",
    },
    () => {
      window.alert("계획이 작성되었습니다.");
      router.push({ path: "/plan" });
    },
    (error) => {
      window.alert(error);
    }
  );
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
