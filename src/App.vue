<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="cover">
          <div class="square"></div>
          <div class="cover-header">
            <h1 id="bigHeader">Project Motion</h1>
            <!-- <hr style="width: 45%; background-color: white; border-color: white;"> -->
            <a href="#about" class="icon" v-smooth-scroll="{ duration: 2000, offset: 0 }"><i class="fas fa-angle-double-down "></i></a>
          </div>
      </div>
    </div>
    <about></about>
    <!-- <gallery></gallery> -->
    <activities></activities>
    <contactUs></contactUs>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import About from './components/about.vue'
import Activities from './components/activities.vue'
import ContactUs from './components/contactUs.vue'
import Footer from './components/footer.vue'
import Gallery from './components/gallery.vue'

export default {
  components: {
    'navbar': Navbar,
    'about': About,
    'activities': Activities,
    'contactUs': ContactUs,
    'footer': Footer,
    'gallery': Gallery
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
}

.page-height {
  height: 100%;
  /* overflow: hidden; */
}

.row {
  margin: 0 !important;
}

.cover-header {
  height: calc(100vh - 34px);
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.cover {
  background: linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63)), url(./assets/bmx-blue.jpg) top center no-repeat;
  background-size: cover;
  background-color: white;
  width: 100%;
}


#bigHeader {
  font-size: calc(3vw + 2rem);
  color: #F5F5F5;
  font-weight: 400;
  letter-spacing: 2px;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  margin-bottom: 2.5rem;

  text-shadow:
    1px 0px 1px black, 0px 1px 1px #212121,
    2px 1px 1px black, 1px 2px 1px #212121,
    3px 2px 1px #212121, 2px 3px 1px #212121;
}

#thinFont {
  font-size: calc(1vw + 1rem);
  font-weight: 400;
  color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
}

.icon {
  font-size: calc(1vw + 1rem);
  color: #F5F5F5;
  position: absolute;
  border: 1px solid white;
  border-radius: 50px;
  padding: 2px 15px 2px 15px;
  bottom: 0;
  margin-bottom: 20px;
}

.icon:hover {
  color: white;
}

.dark-gray {
  color: #4f4d4c;
}

.square {
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 5px;
  border-image-source: linear-gradient(#00b7a2, #ffd026);
  border-image-slice: 20;
  opacity: 0.7;
  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
}

@media screen and (max-width: 580px){
  .square{
    width: 100px;
    height: 100px;
  }

  .cover-header {
    height: calc(100vh - 50px);
  }
}
</style>
