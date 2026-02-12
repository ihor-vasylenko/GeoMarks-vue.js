const token = import.meta.env.VITE_MAPBOX_TOKEN

export const mapSettings = {
  style: 'mapbox://styles/mapbox/streets-v12',
  apiToken: token,
}
