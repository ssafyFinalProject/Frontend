<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router/auto";
import { useAppStore } from "@/stores/app";

import {
  validateNickname,
  validateEmail,
  validatePassword,
} from "@/utils/validations";

import { checkMemberDuplicate, checkEmailDuplicate } from "@/api/member";
import { signUp } from "@/api/auth";

const router = useRouter();

const store = useAppStore();

const nickname = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);

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
  loading.value = true;

  // const canSignUp = await checkMemberDuplicate(
  //   nickname.value,
  //   ({ data }) => {
  //     return data.isPresent !== true;
  //   },
  //   (error) => {
  //     console.log(error);
  //     window.alert(error);
  //     return false;
  //   }
  // );

  // if (!canSignUp) {
  //   window.alert("이미 존재하는 닉네임입니다");
  //   return;
  // }

  try {
    const { data } = await checkMemberDuplicate(nickname.value);
    if (data.isPresent) {
      window.alert("이미 존재하는 닉네임입니다.");
      return;
    }
  } catch (error) {
    window.alert(error);
    return;
  }

  try {
    const { data } = await checkEmailDuplicate(email.value);
    if (data.isPresent) {
      window.alert("이미 사용하고 있는 이메일입니다.");
      return;
    }
  } catch (error) {
    window.alert(error);
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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      store.reset();

      const signStatus = data.signStatus;
      store.setSignStatus(signStatus);

      const token = data.tokenDto;
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("refreshToken", token.refreshToken);

      router.push({ path: "/" });
      loading.value = false;
    },
    (error) => {
      window.alert(error);
      router.push({ path: "/signup" });
      loading.value = false;
    }
  );
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-loading v-if="loading"></view-loading>
      <v-img height="165" src="@/assets/fyp-logo.png" />
      <div class="text-center">
        <h1 class="text-h4 font-weight-bold mb-2">SIGN UP</h1>
      </div>
      <v-sheet class="mx-auto" width="350">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            class="ms-1 me-1 mt-1 mb-1"
            v-model="nickname"
            label="닉네임"
            :rules="[validateNickname]"
            variant="solo"
          ></v-text-field>

          <v-text-field
            class="ms-1 me-1 mt-1 mb-1"
            v-model="email"
            label="이메일"
            :rules="[validateEmail]"
            variant="solo"
          ></v-text-field>

          <v-text-field
            class="ms-1 me-1 mt-1 mb-1"
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="[validatePassword]"
            variant="solo"
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
