import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(vueSmoothScroll)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA_tOQuq-Wo7T9Z9xJGfYZ2XAfUKauv8y8",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
