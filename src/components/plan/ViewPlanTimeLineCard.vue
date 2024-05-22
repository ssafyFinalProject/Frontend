<template>
  <v-card class="mx-auto" :subtitle="`${item.content}`" width="800">
    <template v-slot:title>
      <div class="d-flex justify-space-between align-center">
        <span class="font-weight-black">
          {{ item.name }} · {{ item.postDay }}
        </span>
        <v-icon v-if="remove" small class="ml-2" @click="removeItem">
          mdi-delete-outline
        </v-icon>
      </div>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      <v-row>
        <v-col cols="12">
          <view-search-detail-card
            :search="item.place"
            :isPlan="true"
          ></view-search-detail-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
  index: Number,
  remove: Boolean,
});

console.log(props.item);
const emit = defineEmits(["removePost"]);
const removeItem = () => {
  emit("removePost", props.item.postId);
};
</script>
<style scoped></style>
