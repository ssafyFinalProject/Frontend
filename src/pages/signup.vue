<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router/auto";
import { useAppStore } from "@/stores/app";

import {
  validateNickname,
  validateEmail,
  validatePassword,
} from "@/utils/validations";

import { checkMemberDuplicate, getMemberByJWT } from "@/api/member";
import { signUp } from "@/api/auth";

const router = useRouter();

const store = useAppStore();

const nickname = ref("");
const email = ref("");
const password = ref("");

const doSignUP = async () => {
  if (
    !validateNickname(nickname.value) ||
    !validateEmail(email.value) ||
    !validatePassword(password.value)
  ) {
    return window.alert(
      "닉네임, 이메일 또는 비밀번호 형식이 올바르지 않습니다"
    );
  }

  const canSignUp = await checkMemberDuplicate(
    nickname.value,
    ({ data }) => {
      return data.isPresent !== true;
    },
    (error) => {
      console.log(error);
      window.alert(error);
      return false;
    }
  );

  if (!canSignUp) {
    window.alert("이미 존재하는 닉네임입니다");
    return;
  }

  signUp(
    {
      nickname: nickname.value,
      email: email.value,
      password: password.value,
    },
    ({ data }) => {
      localStorage.removeItem("app");

      const signStatus = data.signStatus;
      store.setSignStatus(signStatus);

      const token = data.tokenDto;
      console.log(token);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", token);

      // router.push({ path: "/" });
    },
    (error) => {
      window.alert(error);
      router.push({ path: "/signup" });
    }
  );
  router.push({ path: "/" });
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h4 font-weight-bold mt-4 mb-2">SIGN UP</h1>
      </div>
      <v-sheet class="mx-auto" width="350">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="nickname"
            label="닉네임"
            :rules="[validateNickname]"
          ></v-text-field>

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

          <v-btn class="mt-2 mb-2" type="submit" @click="doSignUP" block
            >회원가입</v-btn
          >
        </v-form>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
