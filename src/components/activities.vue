<template lang="">
<div class="container-fluid test-bg">
  <div>
    <!-- <div class="parrallax"> -->
      <!-- <h1 class="add-header" id="activities">Activities</h1> -->
      <!-- <div align="center" class="para-header">
        <h1 class="add-header"> opening hours</h1>
      </div>

        <div class="row">
          <div class="col-lg-4 " align="center">
              <h3 >Mon - Friday</h3>
              <h6 >10:00 - 17:00</h6>
          </div>
          <div class="col-lg-4" align="center">
            <h1 class="time-header">Saturday</h1>
            <h3 class="open-time">10:00 - 17:00</h3>
          </div>
          <div class="col-lg-4" align="center">
            <h1 class="time-header">Sunday</h1>
            <h3 class="open-time">10:00 - 17:00</h3>
          </div>
        </div> -->
    <!-- </div> -->

    <!-- <div class="col-sm-12 anotherHeader" id="activities">
      <h1 id="bigHeader5">Activities</h1>
    </div> -->
    <div class="wrapper" >
      <div class="activity">
        <div class="icon-wrapper">
          <img src="../assets/icons/abseiling.png" alt="" class="icon-img">
        </div>
        <h3>Test</h3>
        <p class="paragraph-padding2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="activity">
        <div class="icon-wrapper">
          <img src="../assets/icons/skateboarder.png" alt="" class="icon-img">
        </div>
        <h3 >Test</h3>
        <p class="paragraph-padding2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="activity">
        <div class="icon-wrapper">
          <img src="../assets/icons/bicycle-rider.png" alt="" class="icon-img">
        </div>
        <h3 >Test</h3>
        <p class="paragraph-padding2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="activity">
        <div class="icon-wrapper">
          <img src="../assets/icons/rollerblading.png" alt="" class="icon-img">
        </div>
        <h3 >Test</h3>
        <p class="paragraph-padding2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* background-color: white; */
  padding-bottom: 4%;
  padding-top: 4%;
}
.test-bg {
  /* background-color: #D8E4E5; */
  background: linear-gradient(to right, #F5DFC9, #B7ECF4);
  width: 100%;
}
.diagonal-background2 {
  background-image: linear-gradient(42deg, white 62%, #ace5e1 62%);
  width: 100%;
}

.time-header {
  color: white;
  /* font-weight: lighter; */
  text-shadow: black 0px 2px 2px;
  margin-bottom: 6%;
}
.para-header {
  padding-top: 3%;
  padding-bottom: 3%;
}

.open-time {
  color: white;
  font-size: 20px;
}

.activity {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: 10%;
  margin-right: 10%;
  background: white;
  width: auto;
  box-shadow: #afafaf 0px 3px 3px;
}

.paragraph-padding2 {
  padding-right: 30px;
  padding-left: 30px;
}

.icon-wrapper {
  height: 100px;
  width: 100px;
  /* background: linear-gradient(300deg, #f9e9c7, #c0f7f4); */
  background: #B4CDCE;
  margin: auto;
  margin-top: 4%;
  margin-bottom: 4%;
  border-radius: 50px;
  overflow: hidden;
}

.icon-img {
  height: 70px;
  width: 70px;
  margin-top: 13%;
}

h3 {
  color: #4f4d4c;
}
.parrallax {
  position: relative;
  /* opacity: 0.70; */
  background:linear-gradient(rgba(23, 102, 95, 0.2), rgba(23, 102, 95, 0.2)), url('../assets/parallax-images/dab.jpg') center center no-repeat;
  background-size: cover;
  min-height: 350px;

/*fixed = parallax*/
  background-attachment: fixed;

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

.anotherHeader {
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bigHeader5 {
  font-size: calc(3vw + 2rem);
  color: #ffd026;
  font-weight: 500;
  text-shadow: 2px 2px black;
}

/* mobile view */
@media only screen and (max-width: 768px){
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }

}
</style>
