<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-container>
        <v-row class="align-center">
          <v-col>
            <h1>{{ userInfo.nickname }}님의 정보</h1>
          </v-col>
        </v-row>
        <v-spacer class="mt-10 mb-10"></v-spacer>
        <v-text-field
          class="ms-1 me-1"
          label="이메일"
          :model-value="userInfo.email"
          variant="solo"
          disabled
        ></v-text-field>
        <v-text-field
          class="ms-1 me-1"
          :placeholder="userInfo.nickname"
          v-model="changeName"
          label="닉네임"
          variant="solo"
          append-inner-icon="mdi-account-edit"
          @click:append-inner="updateNickname"
        ></v-text-field>
      </v-container>
      <view-mypage-hotplace></view-mypage-hotplace>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/stores/app";
import { updateMember, checkMemberDuplicate } from "@/api/member";

const store = useAppStore();
const userInfo = ref({});
const changeName = ref("");
onMounted(() => {
  userInfo.value = store.getUserInfo;
  changeName.value = store.getUserInfo.nickname;
});

const updateNickname = async () => {
  if (userInfo.value.nickname === changeName.value) {
    window.alert("현재 사용하고 있는 닉네임입니다.");
    return;
  }

  try {
    const { data } = await checkMemberDuplicate(changeName.value);
    console.log(data);
    if (data.isPresent) {
      window.alert("이미 존재하는 닉네임입니다.");
      return;
    }
  } catch (error) {
    window.alert(error);
    return;
  }

  updateMember(
    {
      curNickname: userInfo.value.nickname,
      changeNickname: changeName.value,
    },
    ({ data }) => {
      store.setUserInfo(null);
      store.setUserInfo(data);
      userInfo.value = data;
      window.alert("닉네임이 변경되었습니다.");
    },
    (error) => {
      window.alert(error);
    }
  );
};
</script>

<style scoped></style>
