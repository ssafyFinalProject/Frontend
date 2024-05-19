<template>
  <v-col class="py-2" cols="12">
    <v-btn-toggle v-model="selectValue" rounded="3" group>
      <!-- <v-btn value="1"> close </v-btn> -->
      <v-btn slim class="ma-1" value="2"> small </v-btn>
      <v-btn slim class="ma-1" value="3"> expand </v-btn>
    </v-btn-toggle>
  </v-col>
</template>

<script setup>
import { ref, watch } from "vue";

const selectValue = ref(2);

const emit = defineEmits(["updateMapSize"]);

const doUpdateMapSize = (value) => {
  emit("updateMapSize", value);
};

watch(selectValue, (value) => {
  selectValue.value = value;
  doUpdateMapSize(selectValue.value);
});
</script>

<style scoped></style>
