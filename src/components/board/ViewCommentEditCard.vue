<script setup>
import { ref } from "vue";

const emit = defineEmits(["editComment"]);
const doEditComment = () => {
  emit("editComment", comment.value);
  comment.value = "";
};

const comment = ref("");
</script>

<template>
  <v-col cols="12">
    <!-- append-inner-icon="mdi-comment" -->
    <v-textarea
      v-model="comment"
      class="mx-auto"
      label="댓글을 입력해주세요."
      rows="1"
      variant="outlined"
      rounded="lg"
      @keyup.enter="doEditComment"
    ></v-textarea>
  </v-col>
</template>

<style scoped></style>
