<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <kakao-map
        id="kakao-map"
        class="border-sm rounded"
        :center="center"
        :height="height"
        :markers="markers"
      ></kakao-map>
      <view-map-size-button-toggle @update-map-size="changeHeight" />

      <v-divider class="mt-3 mb-3"></v-divider>

      <view-search-place @send-search-info="doSearch" />

      <v-divider class="mt-3 mb-3"></v-divider>

      <view-search-result-card
        @go-to-map="doGoToMap"
        v-if="places.length > 0"
        :searchs="places"
      />
      <div v-if="places.length == 0 && isSearched" class="text-center">
        <h1 class="text-h4 font-weight-bold mt-4 mb-2">
          검색 결과가 없습니다.
        </h1>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import {
  findPlaceByDetail,
  findPlaceListByCategory,
  findPlaceListByName,
  findPlaceListByRoadAddress,
} from "@/api/place";

const doGoToMap = (search) => {
  changeCenter(search.latitude, search.longitude);
  const element = document.getElementById("kakao-map");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const height = ref(300);
const center = ref({ lat: 37.5013, lng: 127.04 });
const isSearched = ref(false);
const places = ref([
  {
    id: 1,
    name: "Place One",
    category: "RESTAURANT",
    roadAddress: "123 Main St",
    address: "123 Main St, City, Country",
    latitude: 37.7749,
    longitude: 128.4194,
  },
  {
    id: 2,
    name: "Place Two",
    category: "SHOP",
    roadAddress: "456 Market St",
    address: "456 Market St, City, Country",
    latitude: 37.0522,
    longitude: 128.2437,
  },
  {
    id: 3,
    name: "Place Three",
    category: "CAFE",
    roadAddress: "789 Broadway",
    address: "789 Broadway, City, Country",
    latitude: 37.7128,
    longitude: 127.006,
  },
  {
    id: 4,
    name: "Place Four",
    category: "PARK",
    roadAddress: "101 Park Ave",
    address: "101 Park Ave, City, Country",
    latitude: 37.5074,
    longitude: 127.1278,
  },
]);

const markers = ref(
  places.value.map((place) => {
    return {
      content: place.name,
      lat: place.latitude,
      lng: place.longitude,
    };
  })
);

// 지도의 Height를 바꾸는 함수
const changeHeight = (value) => {
  if (value == 1) {
    height.value = 0;
  } else if (value == 2) {
    height.value = 300;
  } else {
    height.value = 500;
  }
};

// 지도의 중심을 바꾸는 함수
const changeCenter = (lat, lng) => {
  center.value.lat = lat;
  center.value.lng = lng;
};

// 검색타입과 검색어를 받아서 검색하는 함수
const doSearch = (value) => {
  const { select, searchContent } = value;

  if (select == 0) {
    findPlaceByDetail(
      searchContent,
      ({ data }) => {
        places.value = data;
      },
      (error) => {
        console.log(error);
      }
    );
  } else if (select == 1) {
    findPlaceListByCategory(
      searchContent,
      ({ data }) => {
        places.value = data;
      },
      (error) => {
        console.log(error);
      }
    );
  } else if (select == 2) {
    findPlaceListByName(
      searchContent,
      ({ data }) => {
        places.value = data;
      },
      (error) => {
        console.log(error);
      }
    );
  } else if (select == 3) {
    findPlaceListByRoadAddress(
      searchContent,
      ({ data }) => {
        places.value = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isSearched.value = true;
  console.log(value);
};
</script>

<style scoped></style>
