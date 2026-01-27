<script setup>
import IButton from '../components/IButton.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex flex-col justify-center items-center px-5 bg-(--primary-bg)">
      <div class="text-center max-w-[508px] max-h-[364px]">
        <img class="inline mb-4" src="../assets/img/map-pin.svg" alt="" />
        <h1 class="font-bold text-[38px] mb-3">GeoMarks</h1>
        <p class="leading-[133%] tracking-tight mb-8">
          A simple web application that allows you to mark your favorite places, as well as those
          you'd really like to visit.
        </p>
        <IButton />
      </div>
    </section>
    <section class="flex-1 relative">
      <img class="absolute h-full w-full object-cover" src="../assets/img/map-static.jpg" alt="" />
    </section>
  </main>
</template>
