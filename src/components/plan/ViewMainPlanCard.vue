<script setup>
const props = defineProps({
  plan: Object,
});

const emit = defineEmits(["removePlan"]);
const doRemovePlan = () => {
  emit("removePlan", props.plan.planId);
};
</script>

<template>
  <v-col cols="6">
    <v-card class="mb-1">
      <v-img
        :src="plan.mainImage || 'https://picsum.photos/200/300'"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="220px"
        cover
      >
        <v-card-title class="pb-0 text-white">{{ plan.name }}</v-card-title>
        <v-card-subtitle class="mb-3 text-white">
          {{ plan.content }}</v-card-subtitle
        >
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="doRemovePlan"
          color="medium-emphasis"
          icon="mdi-trash-can"
          size="small"
        ></v-btn>

        <router-view>
          <v-btn
            :to="{ path: `/plan/edit/detail/${plan.planId}` }"
            color="medium-emphasis"
            icon="mdi-pencil"
            size="small"
          ></v-btn>
        </router-view>
        <router-view>
          <v-btn
            :to="{ path: `/plan/${plan.planId}` }"
            color="medium-emphasis"
            icon="mdi-eye"
            size="small"
          ></v-btn>
        </router-view>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<style scoped></style>
