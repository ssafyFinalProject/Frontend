<script setup>
defineProps(["markerInfo"]);
import { Marker, InfoWindow } from "vue-kakao-maps";
</script>

<template>
  <Marker :position="{ lat: markerInfo.lat, lng: markerInfo.lng }">
    <InfoWindow class="window" open> {{ markerInfo.content }} </InfoWindow>
  </Marker>
</template>

<style scoped>
.window {
  width: 150px;
  text-align: center;
  background-color: white;
  border: 2px solid #03a9f4;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
