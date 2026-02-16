<script setup>
import { reactive } from 'vue'
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})
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
    <IButton class="mt-10 w-full" variant="secondary" type="submit" :is-loading="props.isLoading">
      Log In
    </IButton>
  </form>
</template>
