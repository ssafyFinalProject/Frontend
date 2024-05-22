<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-subtitle-2 mb-2">Default</div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-responsive>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
