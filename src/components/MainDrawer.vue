<template>
  <v-navigation-drawer fixed="true" expand-on-hover rail permanent>
    <v-list>
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        :subtitle="userInfo && userInfo.email"
        :title="userInfo && userInfo.nickname"
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
        prepend-icon="mdi-lightbulb-on"
        title="추천 여행지"
        value="chatgpt"
        :to="{ path: '/chatgpt' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-heart"
        title="핫플레이스"
        value="recommend"
        :to="{ path: '/recommend' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="커뮤니티"
        value="community"
        :to="{ path: '/board/1' }"
      ></v-list-item>
    </v-list>
    <v-divider class="mb-2"></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        :title="`다크모드 : ${isDark ? 'OFF' : 'ON'}`"
        value="dark"
        prepend-icon="mdi-theme-light-dark"
        @click="toggleTheme"
      >
      </v-list-item>
    </v-list>

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

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router/auto";
import { useAppStore } from "@/stores/app";
import { logout } from "@/api/auth";
import { useTheme } from "vuetify";

const theme = useTheme();
const userInfo = ref({});
const isDark = ref(false);
const store = useAppStore();

const toggleTheme = () => {
  if (theme.global.name.value === "dark") {
    theme.global.name.value = "light";
    isDark.value = false;
  } else {
    theme.global.name.value = "dark";
    isDark.value = true;
  }
};

onMounted(async () => {
  userInfo.value = store.getUserInfo;
});
const router = useRouter();

const doLogout = () => {
  logout(
    () => {
      localStorage.removeItem("app");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      store.$reset();

      router.replace({ path: "/login" });
    },
    (error) => {
      window.alert(error);
    }
  );
};
</script>

<style scoped></style>
