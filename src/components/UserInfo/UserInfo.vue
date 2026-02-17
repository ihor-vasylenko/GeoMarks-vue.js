<script setup>
import UserIcon from './UserIcon.vue'
import { useMutation } from '../../composables/useMutation'
import { getUserInfo } from '../../api/user'

import { onMounted } from 'vue'

const {
  data: userInfo,
  mutation: getUser,
  isLoading,
} = useMutation({
  mutationFn: () => getUserInfo(),
})

onMounted(() => {
  getUser()
})
</script>

<template>
  <div
    class="flex sticky top-0 items-center text-black gap-3 bg-[#dac7c7] border-solid border-b-2 border-[#8c7272] rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-10"
  >
    <div class="w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary">
      <UserIcon class="text-white" />
    </div>
    <span v-if="isLoading">Loading...</span>
    <span v-if="userInfo">{{ userInfo.data.name }}</span>
  </div>
</template>
