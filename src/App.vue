<script setup>
import { ref } from 'vue'
// import HomepageViewVue from './views/HomepageView.vue'
// import ListFavoritePlacesVue from './components/ListFavoritePlaces/ListFavoritePlaces.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(true)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <!-- <HomepageViewVue /> -->
  <!-- <ListFavoritePlacesVue>
    <template #label>Add markers</template>
  </ListFavoritePlacesVue> -->
  <button @click="openModal">open</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal
    :is-open="isOpen"
    @close="closeModal"
    @submit="console.log"
  ></CreateNewPlaceModal>
</template>
