<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-loading v-if="loading" />
      <KakaoMap
        id="kakao-map"
        class="border-sm rounded"
        :center="center"
        :height="height"
        :markers="markers"
      ></KakaoMap>
      <view-map-size-button-toggle @update-map-size="changeHeight" />

      <v-divider class="mt-3 mb-3"></v-divider>

      <view-search-input @send-search-info="doSearch" />

      <v-divider class="mt-3 mb-3"></v-divider>
      <view-search-result-grid
        @add-favorite="doAddFavorite"
        @go-to-map="doGoToMap"
        v-if="places.length > 0"
        :searchs="places"
        :favorites="placeIdSet"
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
import { ref, watch, onMounted } from "vue";
import {
  findPlaceByDetail,
  findPlaceListByCategory,
  findPlaceListByName,
  findPlaceListByRoadAddress,
  registMyPlace,
  getMyPlaceList,
  deleteMyPlace,
} from "@/api/place";

const myPlace = ref([]);
const placeIdSet = ref(null);
const loading = ref(false);

onMounted(() => {
  placeIdSet.value = new Set();
  getMyPlaceList(
    ({ data }) => {
      myPlace.value = data;
      myPlace.value.forEach((place) => {
        placeIdSet.value.add(place.placeId);
      });
      console.log(placeIdSet.value);
    },
    (error) => {
      window.alert(error);
    }
  );
});

const doAddFavorite = (search) => {
  console.log(search);
  if (!placeIdSet.value.has(search.placeId)) {
    registMyPlace(
      search.placeId,
      ({ data }) => {
        myPlace.value.push(data);
        // window.alert("즐겨찾기에 추가되었습니다.");
      },
      () => {
        // window.alert("즐겨찾기 추가에 실패했습니다.");
      }
    );
  } else {
    deleteMyPlace(
      search.placeId,
      () => {
        myPlace.value = myPlace.value.filter(
          (place) => place.placeId != search.placeId
        );
        // window.alert("즐겨찾기에서 삭제되었습니다.");
      },
      (error) => {
        window.alert(error);
      }
    );
  }
};

const doGoToMap = (search) => {
  changeCenter(search.latitude, search.longitude);
  const element = document.getElementById("kakao-map");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const height = ref(500);
const center = ref({ lat: 37.5013, lng: 127.04 });
const isSearched = ref(false);
const places = ref([]);

// 즐겨찾기에 추가된 장소를 watch
watch(
  myPlace,
  (newMyPlace) => {
    placeIdSet.value = new Set();
    newMyPlace.forEach((place) => {
      placeIdSet.value.add(place.placeId);
    });
  },
  { deep: true }
);

// 검색 정보가 바뀔 때마다 마커를 변경하는 watch
const markers = ref([]);
watch(
  places,
  (newPlaces) => {
    markers.value = newPlaces.map((place) => {
      return {
        content: place.name,
        lat: place.latitude,
        lng: place.longitude,
      };
    });
  },
  { deep: true }
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
  center.value = { lat: 0, lng: 0 };
  center.value.lat = lat;
  center.value.lng = lng;
};

// 검색타입과 검색어를 받아서 검색하는 함수
const doSearch = (value) => {
  const { select, searchContent } = value;

  if (searchContent.length == 0) {
    return;
  }

  loading.value = true;
  if (select == 0) {
    findPlaceByDetail(
      searchContent,
      ({ data }) => {
        places.value = data;
      },
      (error) => {
        window.alert(error);
      }
    );
  } else if (select == 1) {
    findPlaceListByCategory(
      searchContent,
      ({ data }) => {
        places.value = data;
        isSearched.value = true;
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
        isSearched.value = true;
      },
      (error) => {
        window.alert(error);
      }
    );
  } else if (select == 3) {
    findPlaceListByRoadAddress(
      searchContent,
      ({ data }) => {
        places.value = data;
        isSearched.value = true;
      },
      (error) => {
        window.alert(error);
      }
    );
  }
  loading.value = false;
};
</script>

<style scoped></style>
