<script setup>
import FavoritePlaceVue from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4"><slot name="label">Markers</slot></div>
    <FavoritePlaceVue v-for="list in 4" :key="list" />

    <IButton class="w-full mt-10" variant="secondary">Add marker</IButton>
  </div>
</template>
