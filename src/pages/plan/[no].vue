<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router/auto";
import { getPlan } from "@/api/plan";

const plan = ref({});
const posts = ref([]);
const route = useRoute();

const center = ref({ lat: 37.5013, lng: 127.04 });
onMounted(() => {
  const planId = route.params.no;
  getPlan(
    planId,
    ({ data }) => {
      plan.value = data.plan;
      posts.value = data.posts;
      console.log(posts);
    },
    (error) => {
      window.alert(error);
    }
  );
});
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-timeline side="end">
        <v-timeline-item
          v-for="(item, index) in posts"
          :key="item.postId"
          dot-color="primary"
          size="small"
        >
          <view-plan-time-line-card :item="item" :index="index" />
        </v-timeline-item>
      </v-timeline>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
