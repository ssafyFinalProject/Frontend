<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router/auto";
import { getBoardList, getBoardCount } from "@/api/board";

const route = useRoute();
const router = useRouter();

const boards = ref([]);
const total = ref(1);
const no = ref(0);

onMounted(() => {
  no.value = parseInt(route.params.no);
  getBoardCount(
    ({ data }) => {
      total.value = Math.ceil((parseInt(data.count) - 1) / 10);
      console.log("count", data.count);
      console.log("total", total.value);
    },
    (error) => {
      window.alert(error);
    }
  );

  getBoardList(
    no.value - 1,
    ({ data }) => {
      boards.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const clickPage = () => {
  getBoardList(
    no.value - 1,
    ({ data }) => {
      boards.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
  router.push({ path: `/board/${no.value}` });
};
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
            <router-view>
              <v-btn :to="{ path: `/board/edit` }">
                <v-tooltip activator="parent" location="top">글작성</v-tooltip>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-view>
          </v-col>
        </v-row>
      </v-container>
      <v-row dense>
        <view-main-board-card
          v-for="item in boards"
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
