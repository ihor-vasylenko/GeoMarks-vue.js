<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl">
      <div class="flex justify-center gap-10 mb-10">
        <router-link to="registration" v-slot="{ isExactActive }">
          <span :class="isExactActive ? 'text-(--primary-hover)' : 'text-gray-500'"> Sign up </span>
        </router-link>

        <router-link to="login" v-slot="{ isExactActive }">
          <span :class="isExactActive ? 'text-(--primary-hover)' : 'text-gray-500'"> Log in </span>
        </router-link>
      </div>
      <RouterView />
    </section>
  </BaseLayout>
</template>
