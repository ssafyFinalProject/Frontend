<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-loading v-if="loading" />
      <v-img class="mt-10 mb-6" height="150" src="@/assets/logo-chatgpt.png" />

      <div class="text-center">
        <h1 class="text-h3 font-weight-bold mt-4">
          ChatGPT에게 여행 정보를 받아보세요!
        </h1>
      </div>
      <v-spacer class="mt-5 mb-5"></v-spacer>
      <div class="text-center">
        <v-text-field
          class="ms-1 me-1"
          v-model="chatText"
          label="지역명을 입력하세요."
          variant="solo"
          @keydown.enter="doChat"
        ></v-text-field>
      </div>

      <v-spacer class="mt-5 mb-5"></v-spacer>
      <view-search-result-grid
        v-show="places.length > 0"
        @go-to-map="doGoToMap"
        v-if="places.length > 0"
        :searchs="places"
        :favorites="new Set()"
      />

      <v-spacer class="mt-5 mb-5"></v-spacer>
      <KakaoMap
        id="kakao-map"
        class="border-sm rounded"
        :center="center"
        :height="500"
        :markers="markers"
      ></KakaoMap>
    </v-responsive>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { chat } from "@/api/chatgpt";

const chatText = ref("");
const places = ref([]);
const loading = ref(false);
const center = ref({ lat: 37.5013, lng: 127.04 });
const markers = ref([]);

const doChat = () => {
  if (chatText.value === "") {
    return window.alert("지역명을 입력하세요.");
  }

  loading.value = true;
  chat(
    chatText.value,
    ({ data }) => {
      places.value = data;
      markers.value = data.map((place) => ({
        content: place.name,
        lat: place.lat,
        lng: place.lng,
      }));
      if (data.length > 0) {
        changeCenter(data[0].lat, data[0].lng);
      }
      loading.value = false;
    },
    (error) => {
      window.alert(error);
      loading.value = false;
    }
  );
};

const doGoToMap = (search) => {
  changeCenter(search.lat, search.lng);
  const element = document.getElementById("kakao-map");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// 지도의 중심을 바꾸는 함수
const changeCenter = (lat, lng) => {
  center.value = { lat: 0, lng: 0 };
  center.value.lat = lat;
  center.value.lng = lng;
};
</script>

<style scoped></style>
