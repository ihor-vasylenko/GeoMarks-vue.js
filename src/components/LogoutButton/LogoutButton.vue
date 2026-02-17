<script setup>
import { logoutUser } from '@/api/user'
import LogoutIcon from './LogoutIcon.vue'
import { useMutation } from '../../composables/useMutation'
import { useRouter } from 'vue-router'
import { authService } from '../../api/authService'

const router = useRouter()

const { mutation: logout, isLoading } = useMutation({
  mutationFn: () => logoutUser(),
  onSuccess: () => {
    authService.clearToken()
    router.replace('/auth/login')
  },
})
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="logout">
    <span v-if="isLoading">Loading...</span>
    <span v-else>Logout</span>
    <LogoutIcon />
  </button>
</template>
