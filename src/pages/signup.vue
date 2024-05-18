<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router/auto";
import {
  validateNickname,
  validateEmail,
  validatePassword,
} from "@/utils/validations";

import { checkMemberDuplicate } from "@/api/member";
import { signUp } from "@/api/auth";

const router = useRouter();

const memberNickname = ref("");
const memberId = ref("");
const memberPassword = ref("");

const doSignUP = () => {
  if (
    !validateNickname(memberNickname.value) ||
    !validateEmail(memberId.value) ||
    !validatePassword(memberPassword.value)
  ) {
    return window.alert(
      "닉네임, 이메일 또는 비밀번호 형식이 올바르지 않습니다"
    );
  }

  if (!checkMemberDuplicate(memberNickname.value)) {
    return window.alert("이미 존재하는 닉네임입니다.");
  }

  signUp(memberNickname.value, memberId.value, memberPassword.value)
    .then((response) => {
      if (response.data === true) {
        window.alert("회원가입에 성공했습니다.");
        router.push({ path: "/login" });
      } else {
        window.alert("회원가입에 실패했습니다.");
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
        <h1 class="text-h4 font-weight-bold mt-4 mb-2">SIGN UP</h1>
      </div>
      <v-sheet class="mx-auto" width="350">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="memberNickname"
            label="닉네임"
            :rules="[validateNickname]"
          ></v-text-field>

          <v-text-field
            v-model="memberId"
            label="이메일"
            :rules="[validateEmail]"
          ></v-text-field>

          <v-text-field
            v-model="memberPassword"
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
