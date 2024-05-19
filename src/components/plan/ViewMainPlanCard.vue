<script setup>
import { useRouter } from "vue-router/auto";
const router = useRouter();
const props = defineProps({
  plan: Object,
});

// const show = ref(false);

const showPlan = () => {
  router.push({ path: `/plan/${props.plan.no}` });
};
</script>

<template>
  <v-col cols="4">
    <v-card class="mx-auto mb-1" max-width="344" @click="showPlan">
      <v-img
        height="150px"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-img>

      <v-card-title> {{ props.plan.title }} </v-card-title>

      <v-card-subtitle class="mb-3">
        {{ props.plan.subtitle }}
      </v-card-subtitle>

      <!-- <v-card-actions>
        <v-btn color="orange-lighten-2" text="open"></v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions> -->

      <!-- <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ props.plan.desc }}
          </v-card-text>
        </div>
      </v-expand-transition> -->
    </v-card>
  </v-col>
</template>

<style scoped></style>
