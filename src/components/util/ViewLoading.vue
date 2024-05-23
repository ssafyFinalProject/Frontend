<script setup></script>

<template>
  <div class="centered-progress">
    <v-progress-circular
      :size="80"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<style scoped>
.centered-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
