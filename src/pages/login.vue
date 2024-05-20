<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { validateEmail, validatePassword } from "@/utils/validations";
import { login } from "@/api/auth";
import { getMemberByJWT } from "@/api/member";
import { useAppStore } from "@/stores/app";

const router = useRouter();
const store = useAppStore();

const email = ref("");
const password = ref("");

const doLogin = async () => {
  if (!validateEmail(email.value) || !validatePassword(password.value)) {
    return window.alert("아이디 또는 비밀번호 형식이 올바르지 않습니다");
  }

  login(
    {
      email: email.value,
      password: password.value,
    },
    ({ data }) => {
      const signStatus = data.signStatus;
      store.setSignStatus(signStatus);

      const token = data.tokenDto;
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("refreshToken", token.refreshToken);

      getMemberByJWT(
        ({ data }) => {
          store.setUserInfo(data);
          console.log(data);
          router.push({ path: "/" });
        },
        () => {
          window.alert("로그인에 실패했습니다");
        }
      );
    },
    (error) => {
      console.log(error);
      window.alert("로그인에 실패했습니다");
    }
  );
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h4 font-weight-bold mt-4 mb-2">Hello there!</h1>
      </div>
      <v-sheet class="mx-auto" width="350">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="email"
            label="이메일"
            :rules="[validateEmail]"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="[validatePassword]"
          ></v-text-field>

          <v-btn class="mt-2" type="submit" @click="doLogin" block>LOGIN</v-btn>
        </v-form>

        <router-link :to="{ path: '/signup' }" append>
          <v-btn class="mt-2 mb-2" block>SIGN UP</v-btn>
        </router-link>
        <!-- <router-link>
      <v-btn class="mt-2" block>아이디·비밀번호 찾기</v-btn>
    </router-link> -->
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<style scoped>
a {
  text-decoration: none;
}

#loginBtn {
}
</style>
