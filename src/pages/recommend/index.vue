<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <KakaoMap
        id="kakao-map"
        class="border-sm rounded"
        :markers="getMarkers"
        :center="center"
        :height="500"
      ></KakaoMap>
      <v-divider class="mt-5 mb-5"></v-divider>

      <div class="text-left">
        <h1 class="text-h5 font-weight-bold mt-4 mb-2">
          상위 30개의 인기 여행지를 소개합니다!
        </h1>
      </div>
      <v-divider class="mt-5 mb-5"></v-divider>
      <view-search-result-grid
        @add-favorite="doAddFavorite"
        @go-to-map="doGoToMap"
        :searchs="favorites"
        :favorites="placeIdSet"
      />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getTopFavoritePlace,
  getMyPlaceList,
  registMyPlace,
  deleteMyPlace,
} from "@/api/place";

const favorites = ref([]);
// const markers = ref([]);
const center = ref({ lat: 37.5013, lng: 127.04 });
const placeIdSet = ref(null);
onMounted(() => {
  getTopFavoritePlace(
    30,
    ({ data }) => {
      favorites.value = data;
      // markers.value = data.map((place) => ({
      //   content: place.name + " " + "❤️(" + place.like + ")",
      //   lat: place.latitude,
      //   lng: place.longitude,
      // }));
    },
    (error) => {
      window.alert(error);
    }
  );

  placeIdSet.value = new Set();
  getMyPlaceList(
    ({ data }) => {
      data.forEach((place) => {
        placeIdSet.value.add(place.placeId);
      });
    },
    (error) => {
      window.alert(error);
    }
  );
});

const getMarkers = computed(() => {
  return favorites.value.map((place) => ({
    content: place.name + " " + "❤️(" + place.like + ")",
    lat: place.latitude,
    lng: place.longitude,
  }));
});

const changeCenter = (lat, lng) => {
  center.value = { lat: 0, lng: 0 };
  center.value.lat = lat;
  center.value.lng = lng;
};

const doGoToMap = (search) => {
  changeCenter(search.latitude, search.longitude);
  const element = document.getElementById("kakao-map");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const doAddFavorite = (search) => {
  console.log(search);
  if (!placeIdSet.value.has(search.placeId)) {
    registMyPlace(
      search.placeId,
      () => {
        placeIdSet.value.add(search.placeId);
        window.alert("즐겨찾기에 추가되었습니다.");
      },
      () => {
        window.alert("즐겨찾기 추가에 실패했습니다.");
      }
    );
  } else {
    deleteMyPlace(
      search.placeId,
      () => {
        placeIdSet.value.delete(search.placeId);
        window.alert("즐겨찾기에서 삭제되었습니다.");
      },
      (error) => {
        window.alert(error);
      }
    );
  }
};
</script>

<style scoped></style>
