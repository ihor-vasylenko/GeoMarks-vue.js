<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
  to: String,
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const variantStyles = {
  primary: 'bg-[#2b2b2b] hover:bg-[#3e3e3e]',
  secondary: `relative bg-[linear-gradient(91deg,#7e7e7e_0%,#525252_100%)]
    before:absolute before:inset-0 before:rounded-[12px]
    before:bg-[linear-gradient(91deg,#6a6a6a_0%,#3d3d3d_100%)]
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100 overflow-hidden`,
}

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="transition-colors duration-300 rounded-[12px] py-3.5 px-10 w-[196px] h-[56px] text-[16px] text-center leading-[1.37px] tracking-[-0.03em] font-bold text-white"
    :class="variantStyles[props.variant]"
    :to="link"
  >
    <span class="relative z-10">
      <template v-if="props.isLoading">Loading ...</template>
      <template v-else><slot></slot></template>
    </span>
  </component>
</template>
