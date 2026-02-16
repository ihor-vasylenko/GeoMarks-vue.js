<script setup>
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { authService } from '@/api/authService'
import { useMutation } from '@/composables/useMutation'

import { useRouter } from 'vue-router'
const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleLoginUser,
} = useMutation({
  mutationFn: (data) => authService.loginUser(data),
  onSuccess: () => router.replace('/map'),
})
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-600">{{ error.message }}</div>
</template>
