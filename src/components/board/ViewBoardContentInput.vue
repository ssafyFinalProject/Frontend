<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const content = ref("");

const emit = defineEmits(["sendContent"]);

const sendContent = () => {
  emit("sendContent", { content: content.value, title: title.value });
};

const goBack = () => {
  router.back();
};
</script>

<template>
  <v-container fluid>
    <v-text-field
      v-model="title"
      label="제목을 입력하세요."
      variant="solo"
    ></v-text-field>

    <v-textarea
      v-model="content"
      label="내용을 입력하세요."
      name="input"
      variant="solo"
      auto-grow
    ></v-textarea>
    <v-btn
      class="me-3"
      color="primary"
      @click="sendContent"
      @keyup.enter="sendContent"
      >작성</v-btn
    >
    <v-btn @click="goBack">취소</v-btn>
  </v-container>
</template>

<style scoped></style>
