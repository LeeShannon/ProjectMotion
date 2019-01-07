<template lang="html">
  <div class="gallery" id="gallery">

    <div class="grid-container">
      <div class="grid-item">
        <img src="../assets/bicy-blue.jpg" alt="" class="gallery-item">
      </div>
      <div class="grid-item grid-header" style="background-color: #e3efee;">
        <div class="gal-header" align="center">
          <h1 class="contactH1">Latest Pics</h1>
          <hr class="line-blue-left">
        </div>

          <!-- <img src="../assets/skateboard.jpg" alt="" class="gallery-item"> -->
      </div>
      <div class="grid-item">
        <img src="../assets/bicy.jpg" alt="" class="gallery-item">
      </div>
      <div class="grid-item">
        <img src="../assets/skate-ramp.jpg" alt="" class="gallery-item">
      </div>
      <div class="grid-item">
        <img src="../assets/bmx.jpg" alt="" class="gallery-item">
      </div>
      <div class="grid-item">
        <img src="../assets/rock-climber.jpg" alt="" class="gallery-item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.gallery{
  /* padding-top: 2%; */
  /* padding-bottom: 5%; */
  /* background-color: #f2f2f2; */
  margin: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;

}
.grid-item {
  height: 300px;
  width: auto;
  display: grid;
  justify-items: center;
  align-items: center;
}
.gallery-item{
  height: 300px;
  width: 100%;
  object-fit: fill;
}

hr.line-blue-left {
  border: 0;
  height: 5px;
  background-color: #41a9c6;
  width: 66px;
  /* margin-left: 0px; */
  }

@media screen and (max-width: 580px) {
  .grid-container {
      grid-template-columns: auto;
  }
}

</style>
