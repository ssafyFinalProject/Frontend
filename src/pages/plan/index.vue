<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router/auto";

import { getPlanList } from "@/api/plan";

const plans = ref([]);
onMounted(() => {
  getPlanList(
    ({ data }) => {
      plans.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const router = useRouter();

const moveEditPage = () => {
  router.push({ path: "/plan/edit" });
};

// const plans = ref([
//   {
//     no: 1,
//     title: "View",
//     subtitle: "View",
//     desc: "View",
//   },
// ]);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row class="align-center">
        <v-col>
          <h1>plan</h1>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn @click="moveEditPage">
            <v-tooltip activator="parent" location="top"
              >계획 생성하기</v-tooltip
            >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <ViewMainPlanCard
          v-for="plan in plans"
          :key="plan.title"
          :plan="plan"
        />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
