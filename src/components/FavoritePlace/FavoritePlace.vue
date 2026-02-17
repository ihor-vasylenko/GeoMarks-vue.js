<script setup>
import FavoritePlaceButton from './FavoritePlaceButton.vue'
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
import fallbackimage from '../../assets/img/fallbackImage.jpg'
import { defineEmits } from 'vue'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean,
  },
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" :src="props.img || fallbackimage" alt="" />
      <div class="min-w-0">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C] truncate mr-2">{{ props.title }}</h2>
          <div class="flex gap-2 shrink-0">
            <FavoritePlaceButton @click="emit('edit')"><EditIcon /></FavoritePlaceButton>
            <FavoritePlaceButton @click.stop="emit('delete')"><DeleteIcon /></FavoritePlaceButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3 text-[rgba(44,44,44,0.5)]">
          {{ props.description }}
        </p>
      </div>
    </div>

    <div class="h-px w-full mt-4" :class="props.isActive ? 'bg-[#2c2c2c]' : 'bg-[#ececec]'"></div>
  </section>
</template>
