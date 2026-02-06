<script setup>
import HomepageViewVue from './views/HomepageView.vue'
import ListFavoritePlacesVue from './components/ListFavoritePlaces/ListFavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageViewVue /> -->
  <ListFavoritePlacesVue>
    <template #label>Add markers</template>
  </ListFavoritePlacesVue>
</template>
