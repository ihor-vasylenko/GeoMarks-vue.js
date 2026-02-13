<script setup>
import { reactive } from 'vue'
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Email" placeholder="email@email.com" v-model="userData.email" />
    <IInput type="password" label="Password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="secondary" type="submit">Log In</IButton>
  </form>
</template>
