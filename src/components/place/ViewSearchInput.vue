<template>
  <v-col class="py-2" cols="12">
    <v-chip-group v-model="select" selected-class="text-primary" mandatory>
      <v-chip v-for="tag in tags" :key="tag" :text="tag"></v-chip>
    </v-chip-group>

    <v-spacer class="mt-3"></v-spacer>
    <v-text-field
      v-model="searchContent"
      :append-inner-icon="searchContent ? 'mdi-map-search-outline' : ''"
      label="검색어"
      type="text"
      variant="solo"
      @click:append-inner="doSendSearchInfo"
      @keyup.enter="doSendSearchInfo"
    ></v-text-field>
  </v-col>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["sendSearchInfo"]);

const searchContent = ref("");
const select = ref(0);
const tags = ref(["all", "category", "name", "road"]);

const doSendSearchInfo = () => {
  emit("sendSearchInfo", {
    select: select.value,
    searchContent: searchContent.value,
  });
};

watch(select, (value) => {
  select.value = value;
  doSendSearchInfo();
});
</script>

<style scoped></style>
