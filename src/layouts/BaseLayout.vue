<template>
  <main class="flex h-screen">
    <section
      class="flex-1 flex flex-col justify-center items-center px-5 bg-(--primary-bg) text-white"
    >
      <div class="text-center max-w-[508px] w-full max-h-[364px]">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1 relative">
      <img class="absolute h-full w-full object-cover" src="../assets/img/map-static.png" alt="" />
    </section>
  </main>
</template>
