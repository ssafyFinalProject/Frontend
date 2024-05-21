<template>
  <v-card class="mx-auto" subtitle="The #1 Vue UI Library" width="800">
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem! -->
      <v-row>
        <v-col cols="6">
          <v-card
            subtitle="This is a card subtitle"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="This is a title"
          ></v-card>
        </v-col>
        <v-col cols="6">
          <view-search-detail
            :search="{
              id: 1,
              name: 'Place One',
              category: 'RESTAURANT',
              roadAddress: '123 Main St',
              address: '123 Main St, City, Country',
              latitude: 37.7749,
              longitude: -122.4194,
            }"
          ></view-search-detail>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup></script>
<style scoped></style>
