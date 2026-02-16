<script setup>
import ListFavoritePlaces from '../components/ListFavoritePlaces/ListFavoritePlaces.vue'
import MarkerIcon from '../components/icons/MarkerIcon.vue'

import { onMounted, ref } from 'vue'

import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings'
import 'mapbox-gl/dist/mapbox-gl.css'

import { getFavoritePlaces } from '@/api/favorite-places'

const listFavoritePlaces = ref([])

const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = listFavoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat })
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  listFavoritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <ListFavoritePlaces
        :items="listFavoritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in listFavoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
