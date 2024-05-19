<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/stores/app";
import { useRoute } from "vue-router/auto";
import { searchBoardById } from "@/api/board";
import { writeComment, deleteComment } from "@/api/comment";

const store = useAppStore();
const userInfo = store.userInfo;

const props = defineProps({
  boardInfo: Object,
});

// const info = ref({});
// const board = ref({});
// const commentList = ref([]);

// onMounted(() => {
//   info.value = searchBoardById(props.boardInfo.boardId);
//   board.value = info.value.board;
//   commentList.value = info.value.commentList;
// });

const commentList = ref([
  {
    commentId: 1,
    boardId: 1,
    content: "댓글 내용입니다.",
    member: {
      memberId: 1,
      nickname: "작성자1",
    },
  },
  {
    commentId: 2,
    boardId: 1,
    content: "댓글 내용입니다.",
    member: {
      memberId: 2,
      nickname: "작성자2",
    },
  },
  {
    commentId: 3,
    boardId: 1,
    content: "댓글 내용입니다.",
    member: {
      memberId: 3,
      nickname: "작성자3",
    },
  },
]);

const route = useRoute();
const boardId = ref(route.params.boardId);

const doEditComment = (content) => {
  if (writeComment(boardId.value, content)) {
    window.alert("댓글이 등록되었습니다.");
  } else {
    window.alert("댓글 등록에 실패했습니다.");
  }
};

const doDeleteComment = (id) => {
  if (deleteComment(id)) {
    // TODO: 클라이언트단 로직 필요
    console.log("댓글이 삭제되었습니다.");
  } else {
    console.log("댓글이 삭제되지 않았습니다.");
  }
};
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-main-board-detail-card :boardInfo="boardInfo" />
      <v-divider class="mt-5 mb-5"></v-divider>
      <view-comment-edit-card @edit-comment="doEditComment" />
      <!-- <view-main-comment-card
        v-for="item in commentList"
        :key="item.title"
        :commentInfo="item"
      ></view-main-comment-card> -->
      <v-list lines="two">
        <!-- <v-list-subheader inset
          >댓글 · {{ commentList.length }}개</v-list-subheader
        > -->

        <v-list-item
          v-for="comment in commentList"
          :key="comment.commentId"
          :subtitle="comment.member.nickname"
          :title="comment.content"
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
