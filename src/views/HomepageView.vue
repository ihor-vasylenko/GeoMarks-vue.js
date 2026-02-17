<script setup>
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import UserInfo from '../components/UserInfo/UserInfo.vue'
import LogoutButton from '../components/LogoutButton/LogoutButton.vue'
import ListFavoritePlaces from '../components/ListFavoritePlaces/ListFavoritePlaces.vue'
import { useModal } from '@/composables/useModal'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
import { useMutation } from '@/composables/useMutation'

import { getFavoritePlaces } from '@/api/favorite-places'
import { addFavoritePlaces } from '@/api/favorite-places'

import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings'
import 'mapbox-gl/dist/mapbox-gl.css'

import { computed, onMounted, ref } from 'vue'

const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, closeModal, openModal } = useModal()

const {
  data,
  mutation: getPlaces,
  isLoading: isPlacesLoading,
} = useMutation({
  mutationFn: () => getFavoritePlaces(),
})

const listFavoritePlaces = computed(() => data.value ?? [])

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error: addPlaceError,
} = useMutation({
  mutationFn: (newPlacedata) => addFavoritePlaces(newPlacedata),
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  },
})

const hasAddPlaceError = computed(() => {
  return !!addPlaceError.value || !mapMarkerLngLat.value
})

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { coordinates } = listFavoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: coordinates })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleAddPlace = async (formData, resetForm) => {
  if (!mapMarkerLngLat.value) {
    return
  }

  const body = {
    ...formData,
    coordinates: mapMarkerLngLat.value,
  }

  await addPlace(body)

  resetForm()
}

onMounted(() => {
  getPlaces()
})
</script>

<template>
  <main class="flex h-screen">
    <div class="relative bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <UserInfo />
      <div v-if="isPlacesLoading" class="px-6 underline font-bold">Loading...</div>
      <ListFavoritePlaces
        :items="listFavoritePlaces"
        :active-id="activeId"
        :is-places-loading="isPlacesLoading"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />

      <LogoutButton class="mt-10" />

      <CreateNewPlaceModal
        :is-open="isOpen"
        :is-loading="isAddingPlace"
        :has-error="hasAddPlaceError"
        @close="closeModal"
        @submit="handleAddPlace"
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="h-8 w-8" is-active />
        </MapboxMarker>
        <MapboxMarker
          v-for="place in listFavoritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click.stop="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
