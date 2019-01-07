<template lang="html">
  <div class="container-fluid page-height">
    <div class="diagonal-background">
      <div class="row">
        <div class="col-md-6 left-page-space" id="about">
          <div id="flexfrog">
            <div >
              <h1 id="bigHeader4">Who are we?</h1>
              <p class="paragraph-padding">
                Project Motion is a <b><span style="color:#00BCD4;">first of its kind </span></b> for Cape Town and South Africa.
                <br>
                It is an indoor venue housing various features and facilities associated with non-motorised action sports.
                Customers will be able to take part in action sports such as BMX, skateboarding, competitive climbing and rollerblading
                amongst others.
              </p>
              <h2 class="text-center" id="bigHeader3">Some Kind of Slogan</h2>
            </div>
          </div>
        </div>
        <div class="diamond-wrapper" align="center">
          <div class="diamond3"><img class="square-image3" src="../assets/skate-light.jpg"></div>
          <div class="diamond2"><img class="square-image3" src="../assets/climb.jpg"></div>
          <div class="diamond1"><img class="square-image3" src="../assets/bicy-blue.jpg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.paragraph-padding {
  padding-top: 3%;
  padding-bottom: 3%;
  margin-right: 10%;
  line-height: 2;
}

#flexfrog {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;
}

#bigHeader4 {
  font-size: calc(2vw + 2rem);
  color: #4f4d4c;
  /* font-weight: 400; */
  border-bottom: 1px solid #fcb423;
  margin-right: 10%;
  padding-bottom: 3%;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: lighter;
}

#bigHeader3 {
  font-size: calc(1vw + 1.5rem);
  color: #4f4d4c;
  font-weight: 400;
}

.diagonal-background {
  background-image: linear-gradient(315deg, #ace5e1 35%, white 35%);
  width: 100%;
}

.left-page-space {
  left: 10%;
  padding-top: 15px;
  position: relative;
}

/* all diagonal image styling */
.diamond1 {
  width: 250px;
  height: 250px;
  overflow: hidden;
  margin-top: 6%;
}

.diamond2 {
  width: 250px;
  height: 250px;
  overflow: hidden;
  margin-top: 6%;
}

.diamond3 {
  width: 250px;
  height: 250px;
  overflow: hidden;
}

.diamond-wrapper {
  transform: rotate(45deg);
  margin-left: 15%;
  margin-top: 1.5%;
}

.square-image3 {
  height: 150%;
  width: 150%;
  transform: rotate(-45deg) translateX(-10px) translateY(-80px);
  object-fit: cover;
}

/* mobile view */
@media only screen and (max-width: 768px) {
  .page-height {
    overflow: visible;
  }

  .left-page-space {
    left: 0;
    padding: 0;
    position: relative;
  }

  .paragraph-padding {
    padding-top: 3%;
    padding-bottom: 3%;
    margin-right: 0;
    line-height: 2;
  }

  #bigHeader4 {
    font-size: calc(2vw + 2rem);
    color: #4f4d4c;
    font-weight: 400;
    border-bottom: 1px solid #fcb423;
    margin-right: 0;
  }

  #flexfrog {
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 10px;
  }

  /* images for mobile */
  .diamond-wrapper {
    transform: rotate(0deg);
    display: none;
  }
}
</style>
