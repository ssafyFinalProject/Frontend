<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router/auto";
const total = ref(0);
onMounted(() => {
  //TODO: fetch data from server and total count
  console.log("Hello Board!");
  total.value = 10;
});

const route = useRoute();
const router = useRouter();
const no = ref(route.params.no);

const clickPage = () => {
  router.push({ path: `/board/${no.value}` });
};

const moveEditPage = () => {
  router.push({ path: "/board/edit" });
};

// content: "쓸 내용이 없긴해요.",
const dummy = ref([
  {
    boardId: 1,
    title: "임시 제목 입니다.",
    view: 0,
    memberId: 1,
    nickname: "user1",
  },
  {
    boardId: 2,
    title: "Board 2",
    view: 0,
    memberId: 2,
    nickname: "user2",
  },
  {
    boardId: 3,
    title: "Board 3",
    view: 0,
    memberId: 3,
    nickname: "user3",
  },
  {
    boardId: 4,
    title: "Board 4",
    view: 0,
    memberId: 4,
    nickname: "user4",
  },
  {
    boardId: 5,
    title: "Board 5",
    view: 0,
    memberId: 5,
    nickname: "user5",
  },
  {
    boardId: 1,
    title: "임시 제목 입니다.",
    view: 0,
    memberId: 1,
    nickname: "user1",
  },
  {
    boardId: 2,
    title: "Board 2",
    view: 0,
    memberId: 2,
    nickname: "user2",
  },
  {
    boardId: 3,
    title: "Board 3",
    view: 0,
    memberId: 3,
    nickname: "user3",
  },
  {
    boardId: 4,
    title: "Board 4",
    view: 0,
    memberId: 4,
    nickname: "user4",
  },
  {
    boardId: 5,
    title: "Board 5",
    view: 0,
    memberId: 5,
    nickname: "user5",
  },
]);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-container>
        <v-row class="align-center">
          <v-col>
            <h1>page #{{ no }}</h1>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn @click="moveEditPage">
              <v-tooltip activator="parent" location="top">글작성</v-tooltip>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-row dense>
        <view-main-board-card
          v-for="item in dummy"
          :key="item.boardId"
          :boardInfo="item"
        />
      </v-row>
      <div class="text-center mt-3">
        <v-pagination
          @click="clickPage"
          v-model="no"
          :length="total"
          :total-visible="5"
        ></v-pagination>
      </div>
    </v-responsive>
  </v-container>
</template>

<style scoped></style>
