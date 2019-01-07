<template lang="html">
  <div class="">
    <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 100%; height: 100%;"
  >
  <GmapMarker ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" />
</GmapMap>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  computed: {
    google: gmapApi
  }
}
</script>

<style lang="css">
</style>
