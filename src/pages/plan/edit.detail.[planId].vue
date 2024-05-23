<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <view-plan-time-line-card
        v-for="(item, index) in posts"
        class="mt-4 mb-4"
        :key="item.postId"
        :item="item"
        :index="index"
        :remove="true"
        @remove-post="doRemovePost"
      ></view-plan-time-line-card>
      <view-post-edit-dialog @edit-post="doEditPost"></view-post-edit-dialog>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router/auto";
import { getPlan, registPost, deletePost } from "@/api/plan";
import { getMyPlaceList } from "@/api/place";

const route = useRoute();
const plan = ref({});
const posts = ref([]);
const myPlace = ref([]);

onMounted(() => {
  const planId = route.params.planId;
  getPlan(
    planId,
    ({ data }) => {
      plan.value = data.plan;
      posts.value = data.posts;
    },
    (error) => {
      window.alert(error);
    }
  );

  getMyPlaceList(
    ({ data }) => {
      myPlace.value = data;
    },
    (error) => {
      window.alert(error);
    }
  );
});

const doEditPost = (args) => {
  console.log(args);
  registPost(
    {
      planId: route.params.planId,
      placeId: args.placeId,
      name: args.name,
      content: args.content,
      postDay: new Date(args.postDay).toISOString().split("T")[0],
    },
    ({ data }) => {
      posts.value.push(data);
    },
    (error) => {
      window.alert(error);
    }
  );
};

const doRemovePost = (postId) => {
  console.log(postId);
  deletePost(
    postId,
    () => {
      posts.value = posts.value.filter((post) => post.postId !== postId);
      // window.alert("삭제되었습니다.");
    },
    (error) => {
      window.alert(error);
    }
  );
};
</script>
<style scoped></style>
