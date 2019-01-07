<template lang="html">
  <div class="container-fluid">
      <div class="parrallax2">
        <h1 class="add-header">Check out our merch</h1>
        <a href="#" @click="goToShop()" class="btn shopbtn">Shop now</a>
      </div>
        <div class="row">
          <div class="col-md-7 col-sm-12" style="padding-left: 0;" id="contactUs">

            <GmapMap
              :center="{lat:10, lng:10}"
              :zoom="7"
              :options="{styles: styles}"
              map-type-id="terrain"
              style="width: 100%; height: 100%;"
              >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></gmap-marker>
        </GmapMap>

          </div>
          <div class="col-md-5 col-sm-12 paddings" >
            <h1 class="contactH1"> Contact </h1>
            <br>
            <p><i class="fas fa-phone" style="margin-right: 5px;"></i> +27 1234 567 test</p>
            <p><i class="fas fa-envelope" style="margin-right: 5px;"></i> project-motion@test.com</p>
            <p class="address">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            <div class="media-links">
              <div class="socials">
                <a href="#" class="medias"><i class="fab fa-facebook-f"></i></a>
              </div>
              <div class="socials">
                <a href="#" class="medias"><i class="fab fa-instagram"></i></a>
              </div>
              <div class="socials">
                <a href="#" class="medias"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
  </div>

</template>


<script>
export default {
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }],
      styles:[
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]

    }
  },
  methods: {
    goToShop() {
      window.location = `${window.location.origin}/shop/index.html`;
    }
  }
}
</script>

<style lang="css">
.parrallax2 {
  position: relative;
  /* opacity: 0.70; */
  background:linear-gradient(rgba(12, 58, 54, 0.2), rgba(12, 58, 54, 0.2)), url('../assets/parallax-images/roof-skate.jpg') center center no-repeat;
  background-size: cover;
  min-height: 350px;

/*fixed = parallax*/
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.shopbtn {
  background: linear-gradient(90deg, #F0CCA8, #81DAE2);
  border-radius: 50px;
  color: white;
  border: none;
  margin-top: 2%;
}
.add-header {
  color: white;
  letter-spacing: 2px;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: calc(1.5vw + 1.5rem);
  text-shadow:
    1px 0px 1px black, 0px 1px 1px #212121,
    2px 1px 1px black, 1px 2px 1px #212121,
    3px 2px 1px #212121, 2px 3px 1px #212121;
}

.paddings {
  margin-top: 2%;
  margin-bottom: 2%;
  padding-left: 3%;
}
.address {
  padding-right: 50%;
}

.contactH1 {
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.media-links {
  display: flex;
  flex-direction: row;
}
.socials {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #ffdd63;
  margin-right: 30px;
  text-align: center;
}

.medias {
  color: black;
  font-size: 32px;
  cursor: pointer;
}
</style>
