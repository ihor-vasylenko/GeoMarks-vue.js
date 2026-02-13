<script setup>
import IButton from '../components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <img class="inline mb-4" src="../assets/img/map-pin.svg" alt="" />
    <h1 class="font-bold text-[38px] mb-3">GeoMarks</h1>
    <p class="leading-[133%] tracking-tight mb-8 text-base">
      A simple web application that allows you to mark your favorite places, as well as those you'd
      really like to visit.
    </p>
    <IButton to="auth/registration" variant="primary">try it</IButton>
  </BaseLayout>
</template>
