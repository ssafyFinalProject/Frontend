<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useAppStore } from "@/stores/app";
import { useRoute } from "vue-router/auto";
import { searchBoardById } from "@/api/board";
import { writeComment, deleteComment } from "@/api/comment";

onMounted(() => {
  searchBoardById(
    boardId.value,
    ({ data }) => {
      console.log(data);
      board.value = data.board;
      console.log(board.value);
      comments.value = data.commentList;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const store = useAppStore();
const route = useRoute();

const userInfo = store.userInfo;
const boardId = ref(route.params.boardId);
console.log(boardId.value);

const board = ref({ member: {} });
const comments = ref([]);

onUpdated(() => {
  searchBoardById(
    boardId.value,
    ({ data }) => {
      board.value = data.board;
      comments.value = data.commentList;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const doEditComment = (content) => {
  console.log(boardId.value, content);
  writeComment(
    { boardId: boardId.value, content },
    ({ data }) => {
      comments.value.push(data);
    },
    (error) => {
      window.alert(error);
    }
  );
};

const doDeleteComment = (id) => {
  deleteComment(
    id,
    () => {
      comments.value = comments.value.filter(
        (comment) => comment.commentId !== id
      );
    },
    (error) => {
      window.alert(error);
    }
  );
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-main-board-detail-card :boardInfo="board" />

      <v-divider class="mt-5 mb-5"></v-divider>

      <view-comment-edit-card @edit-comment="doEditComment" />

      <v-list lines="two">
        <!-- <v-list-subheader inset
          >댓글 · {{ comments.length }}개</v-list-subheader
        > -->
        <v-list-item
          v-for="comment in comments"
          :key="comment.commentId"
          :title="comment.content"
          :subtitle="`${comment.member.nickname} · ${comment.date}`"
        >
          <!-- prepend-avatar="https://randomuser.me/api/portraits" -->
          <!-- <template v-slot:prepend>
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-delete</v-icon>
            </v-avatar>
          </template> -->

          <template v-slot:append>
            <v-btn
              v-if="comment.member.memberId === userInfo.memberId"
              @click="doDeleteComment(comment.commentId)"
              color="grey-lighten-1"
              icon="mdi-delete"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
