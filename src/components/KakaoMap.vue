<script setup>
import {
  KakaoMap,
  MapTypeControl,
  ZoomControl,
  useKakaoLoader,
} from "vue-kakao-maps";

console.log(import.meta.env.VITE_KAKAO_API_KEY);
useKakaoLoader({ appKey: import.meta.env.VITE_KAKAO_API_KEY });
</script>

<template>
  <KakaoMap
    :center="{ lat: 37.5013, lng: 127.0395 }"
    style="width: 50%; height: 500px"
  >
    <MapTypeControl position="BOTTOMLEFT" />
    <ZoomControl position="TOPLEFT" />
  </KakaoMap>
</template>

<style scoped></style>
