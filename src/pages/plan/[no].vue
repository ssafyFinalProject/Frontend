<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div>
        <v-timeline side="end">
          <v-timeline-item
            v-for="(item, index) in posts"
            @click="changeCenter(item.latitude, item.longitude)"
            :key="item.postId"
            dot-color="primary"
            size="small"
          >
            <view-plan-time-line-card :item="item" :index="index" />
            <div>
              <KakaoMap
                id="kakao-map"
                class="border-sm rounded"
                :center="{
                  lat: item.place.latitude,
                  lng: item.place.longitude,
                }"
                :markers="[
                  {
                    content: item.place.name,
                    lat: item.place.latitude,
                    lng: item.place.longitude,
                  },
                ]"
                :height="180"
              ></KakaoMap>
            </div>
            <br />
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router/auto";
import { getPlan } from "@/api/plan";

const plan = ref({});
const posts = ref([]);
const route = useRoute();

onMounted(() => {
  const planId = route.params.no;
  getPlan(
    planId,
    ({ data }) => {
      plan.value = data.plan;
      posts.value = data.posts;
      posts.value.sort((a, b) => {
        return new Date(a.postDay) - new Date(b.postDay);
      });
    },
    (error) => {
      window.alert(error);
    }
  );
});
</script>

<style scoped></style>
