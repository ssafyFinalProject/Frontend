<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { VDateInput } from "vuetify/labs/VDateInput";

const router = useRouter();

const title = ref("");
const day = ref(null);
const content = ref("");

const emit = defineEmits(["sendContent"]);

const sendContent = () => {
  emit("sendContent", {
    name: title.value,
    content: content.value,
    planDay: day.value,
  });
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

    <v-date-input
      v-model="day"
      label="날짜를 선택하세요."
      prepend-icon=""
      prepend-inner-icon="$calendar"
      variant="solo"
    ></v-date-input>

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
