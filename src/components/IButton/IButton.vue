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
  primary: 'bg-[#FFA279] hover:bg-[#f89979]',
  secondary: 'bg-gradient-to-r from-[#FFA279] to-[#F3743D] hover:from-[#FF8F66] hover:to-[#E55E2A]',
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
    <template v-if="props.isLoading">Loading ...</template>
    <template v-else><slot></slot></template>
  </component>
</template>
