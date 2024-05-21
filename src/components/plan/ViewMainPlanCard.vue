<script setup>
import { useRouter } from "vue-router/auto";
const router = useRouter();
const props = defineProps({
  plan: Object,
});

console.log(props.plan);
// const show = ref(false);

const showPlan = () => {
  router.push({ path: `/plan/${props.plan.planId}` });
};
</script>

<template>
  <v-col cols="4">
    <v-card class="mb-1">
      <v-img
        :src="plan.src"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
      >
        <v-card-title class="pb-0">{{ plan.name }}</v-card-title>
        <v-card-subtitle class="mb-3"> {{ plan.content }}</v-card-subtitle>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="medium-emphasis" icon="mdi-pencil" size="small"> </v-btn>
        <v-btn
          @click="showPlan"
          color="medium-emphasis"
          icon="mdi-eye"
          size="small"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<style scoped></style>
