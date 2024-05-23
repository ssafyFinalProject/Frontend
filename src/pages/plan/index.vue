<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row class="align-center">
        <v-col>
          <h1>plan</h1>
        </v-col>
        <v-col class="d-flex justify-end">
          <router-view>
            <v-btn :to="{ path: `/plan/edit` }">
              <v-tooltip activator="parent" location="top"
                >계획 생성하기</v-tooltip
              >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </router-view>
        </v-col>
      </v-row>
      <v-row>
        <view-main-plan-card
          @remove-plan="doRemovePlan"
          v-for="plan in plans"
          :key="plan.title"
          :plan="plan"
        />
      </v-row>
      <v-container>
        <v-spacer class="mt-10">
          <div class="text-center" v-if="plans.length == 0">
            <h1 class="text-h3 font-weight-bold mt-4 text-disabled">
              여행 계획을 추가해보세요!
            </h1>
          </div>
        </v-spacer>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getPlanList, deletePlan } from "@/api/plan";

const plans = ref([]);
onMounted(() => {
  console.log("mounted");
  getPlanList(
    ({ data }) => {
      plans.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const doRemovePlan = (planId) => {
  deletePlan(
    planId,
    () => {
      // window.alert("계획이 삭제되었습니다.");
      getPlanList(
        ({ data }) => {
          plans.value = data;
        },
        (error) => {
          window.alert(error);
        }
      );
    },
    (error) => {
      window.alert("계획 삭제에 실패했습니다.");
      console.log(error);
    }
  );
};
</script>

<style scoped></style>
