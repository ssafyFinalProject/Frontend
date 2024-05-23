<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <template v-slot:default="{ expanded }">
            <v-row no-gutters>
              <v-col class="d-flex justify-start" cols="4">
                나의 즐겨찾기
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <view-search-result-grid
            v-show="myPlace.length > 0"
            @add-favorite="doAddFavorite"
            @go-to-map="doGoToMap"
            :searchs="myPlace"
            :favorites="placeIdSet"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/stores/app";
import { getMyPlaceList } from "@/api/place";

const store = useAppStore();
const userInfo = ref({});
userInfo.value = store.getUserInfo;

const myPlace = ref([]);
const placeIdSet = ref(null);
onMounted(() => {
  placeIdSet.value = new Set();
  getMyPlaceList(
    ({ data }) => {
      myPlace.value = data;
      myPlace.value.forEach((place) => {
        placeIdSet.value.add(place.placeId);
      });
    },
    (error) => {
      window.alert(error);
    }
  );
});
</script>

<style scoped></style>
