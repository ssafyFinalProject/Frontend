<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { validateEmail, validatePassword } from "@/utils/validations";
import { login } from "@/api/auth";
import { getMemberByJWT } from "@/api/member";

const router = useRouter();
const memberId = ref("");
const memberPassword = ref("");

const doLogin = () => {
  if (
    validateEmail(memberId.value) !== true ||
    validatePassword(memberPassword.value) !== true
  ) {
    return window.alert("아이디 또는 비밀번호 형식이 올바르지 않습니다");
  }

  // localStorage.setItem("accessToken", "true");
  // router.push({ path: "./" });
  // return;
  login(memberId.value, memberPassword.value)
    .then((response) => {
      if (response.data === true) {
        const { member } = getMemberByJWT();

        router.push({ path: "/" });
      } else {
        window.alert("로그인에 실패했습니다.");
      }
    })
    .catch((error) => {
      window.alert(error);
    });
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h3 font-weight-bold mt-4">Hello there!</h1>
      </div>
      <v-sheet class="mx-auto" width="350">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="memberId"
            label="아이디"
            :rules="[validateEmail]"
          ></v-text-field>

          <v-text-field
            v-model="memberPassword"
            label="비밀번호"
            type="password"
            :rules="[validatePassword]"
          ></v-text-field>

          <v-btn class="mt-2" type="submit" @click="doLogin" block>LOGIN</v-btn>
        </v-form>

        <router-link :to="{ path: '/signup' }" append>
          <v-btn class="mt-2" block>계정이 없으신가요?</v-btn>
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
</style>
