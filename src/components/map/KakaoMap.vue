<template>
  <v-col cols="12">
    <kakao-map :center="center" :style="style">
      <kakao-marker-info
        v-for="item in markers"
        :key="item.content"
        :markerInfo="item"
      />
      <MapTypeControl position="TOPRIGHT" />
      <ZoomControl position="TOPLEFT" />
    </kakao-map>
  </v-col>
</template>

<script setup>
// https://www.npmjs.com/package/vue-kakao-maps
import { ref, watch } from "vue";
import {
  KakaoMap,
  MapTypeControl,
  ZoomControl,
  useKakaoLoader,
} from "vue-kakao-maps";

useKakaoLoader({ appKey: import.meta.env.VITE_KAKAO_API_KEY });
const center = ref({ lat: 37.5013, lng: 127.0395 });
const props = defineProps(["height", "markers"]);

watch(
  () => props.height,
  (value) => {
    style.value.height = value + "px";
  }
);

const style = ref({
  height: props.height + "px",
});
</script>

<style scoped></style>
