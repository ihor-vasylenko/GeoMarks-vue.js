<script setup>
import { reactive } from 'vue'
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" placeholder="Email" v-model="userData.email" />
    <IInput type="password" placeholder="Password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="secondary" type="submit">Log In</IButton>
  </FormContainer>
</template>
