<template lang="html">
  <!-- <div  v-sticky="stickyConfig"> -->
  <div  :class="{sticky: stuck}" >
      <div class="nav-stuff">
        <nav class="nav justify-content-end">
          <div class="handle" @click="show = !show"><i style="font-size:1.7em; color:white" class="fas fa-bars"></i></div>
          <ul v-bind:class="{showing: show}">
            <a href="#about" v-smooth-scroll="{ duration: 2000, offset: 0 }"><li>About</li></a>
            <a href="#gallery" v-smooth-scroll="{ duration: 2000, offset: 0 }"><li>Gallery</li></a>
            <a href="#activities" v-smooth-scroll="{ duration: 2000, offset: 0 }"><li>Activities</li></a>
            <a href="#contactUs" v-smooth-scroll="{ duration: 2000, offset: 0 }" ><li>Contact</li></a>
            <a href="#"><li>Shop <i class="fas fa-shopping-bag"></i></li></a>
          </ul>
        </nav>
      </div>
  </div>
</template>

<script>
import VueSticky from 'vue-sticky'

export default {
  data: function() {
    return {
      show: false,
      stuck: false
    }
  },
  methods: {
    stickyNav() {
      if (window.pageYOffset >= window.innerHeight) {
        this.stuck = true;
        if( screen.width <= 580 ) {
          this.stuck = false;
        }
      } else {
        this.stuck = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.stickyNav);
  }
}

</script>

<style lang="css">
.nav-stuff a {
  color: #F5F5F5;
    /* padding: 15px 20px; */
}
.nav{
  background-color: #212121;
  /* background-color: #000; */
  z-index: 1;
  /* font: bold 14px/1.4 'Open Sans', arial, sans-serif;
  height: 34px; */
}

nav ul{
  overflow: hidden;
  padding: 0;
  text-align: center;
  margin: 0;
  -webkit-transition: max-height 0.4s;
  -ms-transition: max-height 0.4s;
  -moz-transition: max-height 0.4s;
  -o-transition: max-height 0.4s;
  transition: max-height 0.4s;
  z-index: 1;
  text-align: center;
}

nav ul li{
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  border-bottom: none;
  cursor: pointer;

}

nav ul li:hover{

}

nav ul li::before, nav ul li::after {
  display: inline-block;
  opacity: 0;
  transition: opacity 0.2s, -webkit-transform 0.3s;
  transition: transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s, -webkit-transform 0.3s;
}

nav ul li::before {
  margin-right: 10px;
  content: "[";
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
}

nav ul li::after {
  margin-left: 10px;
  content: "]";
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
}

nav ul li:hover::before, nav ul li:hover::after, nav ul li:focus::before, nav ul li:focus::after {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.handle{
  width: 100%;
  background-color: #212121;
  text-align: left;
  box-sizing: border-box;
  padding: 10px 10px;
  cursor: pointer;
  display: none;
  z-index: 1;
}

@media screen and (max-width: 580px){
 nav ul{
   max-height: 0;
 }
.showing{
   max-height: 20em;
 }
 nav ul li{
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    text-align: left;
    z-index: 1;
  }

  .handle{
    display: block;
    z-index: 1;
  }

}




.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  z-index: 1;
}

.sticky + .container-fluid {
  padding-top: 40px;
  z-index: 1;
}
</style>
