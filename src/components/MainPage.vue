<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/ssafy-logo.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">We plan, We go</div>
        <h1 class="text-h3 font-weight-bold mt-4">
          {{ userInfo.nickname }}님 환영합니다.
        </h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <router-link :to="{ path: '/plan' }">
            <v-card
              class="py-4"
              color="surface-variant"
              image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
              prepend-icon="mdi-rocket-launch-outline"
              rounded="lg"
              variant="outlined"
            >
              <!-- <template #image>
              <v-img position="top right" />
            </template> -->

              <template #title>
                <h2 class="text-h5 font-weight-bold">여행 관리</h2>
              </template>

              <template #subtitle>
                <div class="text-subtitle-1">
                  여행을 계획하고 관리해보세요.
                  <v-kbd>여행지 검색</v-kbd> 과 <v-kbd>추천 여행지</v-kbd>를
                  참고할 수 있습니다.
                </div>
              </template>

              <v-overlay
                opacity=".12"
                scrim="primary"
                contained
                model-value
                persistent
              />
            </v-card>
          </router-link>
        </v-col>

        <ViewSubCard
          v-for="item in subCardInfos"
          :key="item.title"
          :cardInfo="item"
        />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const userInfo = store.userInfo;

const subCardInfos = [
  {
    title: "여행지 검색",
    icon: "mdi-card-search-outline",
    subtitle: "여행지 정보를 검색해보세요.",
    link: "/place",
  },
  {
    title: "추천 여행지",
    icon: "mdi-heart-outline",
    subtitle: "ChatGPT를 통한 추천을 받아보세요.",
    link: "/recommend",
  },
  {
    title: "마이페이지",
    icon: "mdi-account",
    subtitle: "내 정보를 확인하고 수정해보세요.",
    link: "/mypage",
  },
  {
    title: "사용 방법",
    icon: "mdi-note-text-outline",
    subtitle: "사용 방법을 확인해보세요.",
    link: "/detail",
  },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
