<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_36.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_48.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_55.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container text-center justify-content-center">
      <p class="text-primary fs-1">ບໍລິການທັງໝົດ</p>
      <div>
        <v-row class="p-2">
          <v-col cols="6" lg="4" md="4" xl="3">
            <v-card class="mx-auto" max-width="200" :elevation="5">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/icon/ball 1.svg"
              >
              </v-img>
              <v-card-title>ຈອງເດີ່ນບານເຕະ</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" md="4" xl="3">
            <v-card class="mx-auto" max-width="200" :elevation="5">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/icon/ball 1.svg"
              >
              </v-img>
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" md="4" xl="3">
            <v-card class="mx-auto" max-width="200" :elevation="5">
              <v-img
                class="white--text align-end"
                height="150px"
                src="../assets/icon/ball 1.svg"
              >
              </v-img>
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" md="4" xl="3">
            <v-card class="mx-auto" max-width="200" :elevation="5">
              <v-img
                class="white--text align-end"
                height="100px"
                
                src="../assets/icon/ball 1.svg"
              >
              </v-img>
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.text-dnone {
  text-decoration: none !important;
}
</style>
