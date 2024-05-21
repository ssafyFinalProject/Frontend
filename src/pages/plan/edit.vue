<script setup>
import { useRouter } from "vue-router/auto";
import { registPlan } from "@/api/plan";
const router = useRouter();

const getContent = (item) => {
  registPlan(
    {
      name: item.name,
      content: item.content,
      planDay: new Date(item.planDay).toISOString().split("T")[0],
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
      <view-plan-content-input
        @send-content="getContent"
      ></view-plan-content-input>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
