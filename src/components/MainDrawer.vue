<script setup>
import { useAppStore } from "@/stores/app";
import { useRouter } from "vue-router/auto";
import { logout } from "@/api/auth";

const router = useRouter();
const store = useAppStore();
const userInfo = store.userInfo;

const doLogout = () => {
  if (logout()) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.replace({ path: "/login" });
  }
};
</script>

<template>
  <v-navigation-drawer expand-on-hover rail permanent>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        :subtitle="userInfo.email"
        :title="userInfo.nickname"
      ></v-list-item>
    </v-list>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="홈"
        value="home"
        :to="{ path: '/' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="마이페이지"
        value="mypage"
        :to="{ path: '/member/mypage' }"
      ></v-list-item>

      <v-divider class="mt-2 mb-2"></v-divider>
      <v-list-item
        prepend-icon="mdi-rocket-launch"
        title="여행 관리"
        value="manage"
        :to="{ path: '/plan' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-card-search"
        title="여행지 검색"
        value="place"
        :to="{ path: '/place' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-heart"
        title="추천 여행지"
        value="recommend"
        :to="{ path: '/recommend' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="커뮤니티"
        value="community"
        :to="{ path: '/board' }"
      ></v-list-item>
    </v-list>
    <v-divider class="mb-2"></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-logout"
        title="로그아웃"
        value="logout"
        @click="doLogout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
