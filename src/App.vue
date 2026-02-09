<script setup>
import HomepageViewVue from './views/HomepageView.vue'
import ListFavoritePlacesVue from './components/ListFavoritePlaces/ListFavoritePlaces.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
</script>

<template>
  <!-- <HomepageViewVue /> -->
  <!-- <ListFavoritePlacesVue>
    <template #label>Add markers</template>
  </ListFavoritePlacesVue> -->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
