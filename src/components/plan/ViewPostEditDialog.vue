<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-rocket"
          text="계획추가"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card prepend-icon="mdi-rocket" title="세부 계획">
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                label="제목*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="content" label="설명"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-date-input
                v-model="postDay"
                label="날짜를 선택하세요."
                prepend-icon=""
                prepend-inner-icon="$calendar"
                variant="solo"
                required
              ></v-date-input>
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="placeId"
                :item-props="true"
                :items="items"
                label="여행지*"
                required
              ></v-select>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*는 필수 항목입니다.</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="취소" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
            color="primary"
            text="저장"
            variant="tonal"
            @click="
              dialog = false;
              doEditPost();
            "
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { VDateInput } from "vuetify/labs/VDateInput";
import { getMyPlaceList } from "@/api/place";

const myPlace = ref(null);
const items = ref([]);
onMounted(() => {
  getMyPlaceList(
    ({ data }) => {
      myPlace.value = data;
      items.value = data.map((place) => {
        return {
          title: place.name,
          subtitle: place.address,
        };
      });
      console.log(items.value);
    },
    (error) => {
      window.alert(error);
    }
  );
});

const emit = defineEmits(["editPost"]);

const doEditPost = () => {
  emit("editPost", {
    placeId: getPlaceId.value,
    name: name.value,
    content: content.value,
    postDay: postDay.value,
  });
};

const name = ref("");
const content = ref("");
const postDay = ref(null);
const placeId = ref(null);

const dialog = ref(false);

const getPlaceId = computed(() => {
  return myPlace.value.find((place) => place.name === placeId.value).placeId;
});
</script>

<style scoped></style>
