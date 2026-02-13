<script setup>
import { reactive } from 'vue'
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Username" v-model="userData.name" />
    <IInput
      type="textarea"
      class="mb-4"
      label="Email"
      placeholder="email@email.com"
      v-model="userData.email"
    />
    <IInput label="Password" type="password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="secondary" type="submit">Sign Up</IButton>
  </form>
</template>
