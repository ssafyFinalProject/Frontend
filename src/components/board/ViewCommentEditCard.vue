<script setup>
import { ref } from "vue";

const emit = defineEmits(["editComment"]);
const doEditComment = () => {
  if (comment.value.trim() === "") {
    return;
  }
  emit("editComment", comment.value);
  comment.value = "";
};

const comment = ref("");
</script>

<template>
  <v-col cols="12">
    <v-textarea
      v-model="comment"
      rows="1"
      class="mx-auto"
      label="댓글을 입력해주세요."
      variant="solo"
      rounded="lg"
      @keyup.enter="doEditComment"
    ></v-textarea>
  </v-col>
</template>

<style scoped></style>
