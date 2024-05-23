<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="165" src="@/assets/fyp-logo.png" />

      <div class="text-center">
        <!-- <div class="text-body-1 font-weight-500 mb-n1">We plan, We go</div> -->
        <h1 class="text-h3 font-weight-bold mt-4">
          {{ userInfo.nickname }}님 환영합니다.
        </h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <router-link :to="{ path: '/plan' }">
            <!-- image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png" -->
            <v-card
              class="py-4"
              color="surface-variant"
              prepend-icon="mdi-rocket-launch-outline"
              variant="solo"
              rounded="lg"
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
                  <br />
                  <v-kbd>여행지 검색</v-kbd> 과 <v-kbd>추천 여행지</v-kbd> 등을
                  이용하여 참고할 수 있습니다.
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
import { ref, onMounted } from "vue";
import { useAppStore } from "@/stores/app";
import { getMemberByJWT } from "@/api/member";

const store = useAppStore();
const userInfo = ref({});
onMounted(() => {
  // if (store.getUserInfo) {
  //   userInfo.value = store.getUserInfo;
  //   return;
  // }
  getMemberByJWT(
    ({ data }) => {
      console.log(data);
      store.setUserInfo(data);
      userInfo.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const subCardInfos = [
  {
    title: "여행지 검색",
    icon: "mdi-card-search-outline",
    subtitle: "여행지 정보를 검색해보세요.",
    link: "/place",
  },
  {
    title: "추천 여행지",
    icon: "mdi-lightbulb-on-outline",
    subtitle: "ChatGPT를 통한 추천을 받아보세요.",
    link: "/chatgpt",
  },
  {
    title: "핫플레이스",
    icon: "mdi-heart-outline",
    subtitle: "인기있는 여행지를 확인해보세요.",
    link: "/recommend",
  },
  {
    title: "커뮤니티",
    icon: "mdi-account-group-outline",
    subtitle: "다른 사용자들과 소통해보세요.",
    link: "/board",
  },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
