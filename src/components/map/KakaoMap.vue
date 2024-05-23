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
import { onMounted, ref, watch } from "vue";
import {
  KakaoMap,
  MapTypeControl,
  ZoomControl,
  useKakaoLoader,
} from "vue-kakao-maps";

onMounted(() => {
  useKakaoLoader({ appKey: import.meta.env.VITE_KAKAO_API_KEY });
});

const props = defineProps(["height", "markers", "center"]);
const style = ref({
  height: props.height + "px",
});
watch(
  () => props.height,
  (value) => {
    style.value.height = value + "px";
  }
);
</script>

<style scoped></style>
