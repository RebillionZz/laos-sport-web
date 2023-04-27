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
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_361.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_361.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/PowerPoint Slide Show  -  NIKOLA LAO STARTUP FEST (2) 8_12_2022 19_26_361.png"
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
    <div class="container-fluid text-center justify-content-center">
      <p class="text-primary fs-1">ບໍລິການທັງໝົດ</p>
      <div class="btn-main">
        <v-row class="d-flex flex-row justify-content-center p-2">
          <v-col cols="6" lg="3" md="3" xl="3">
            <v-card
              class="mx-auto p-1 my-2"
              :elevation="5"
              max-height="200px"
              max-width="240px"
            >
            <router-link to="/football">
              <img src="../../src/assets/icon/ball 1.svg" class="card-img" />
              <div>
                <p class="fs-3 fw-bold">ຈອງເດີ່ນເຕະບານ</p>
              </div>
            </router-link>
            </v-card>
          </v-col>
          <v-col cols="6" lg="3" md="3" xl="3">
            <v-card
              class="mx-auto p-1 my-2"
              :elevation="5"
              max-height="200px"
              max-width="240px"
            >
             <router-link to="/badminton">
              <img src="../../src/assets/icon/i 1.svg" class="card-img" />
              <div>
                <p class="fs-3 fw-bold">ຈອງເດີ່ນຕີດອກ</p>
              </div>
             </router-link>
            </v-card>
          </v-col>
          <v-col cols="6" lg="3" md="3" xl="3">
            <v-card
              id="card-low"
              class="mx-auto p-1 my-2"
              :elevation="5"
              max-height="200px"
              max-width="240px"
            >
              <a href="#" >
              <img src="../../src/assets/icon/News.svg" class="card-img" />
              <div>
                <p class="fs-3 fw-bold">ຂ່າວສານ</p>
              </div>
              </a>
            </v-card>
          </v-col>
          <!-- <v-col cols="6" lg="3" md="3" xl="3">
            <v-card
              class="mx-auto p-1 my-2"
              :elevation="5"
              max-height="200px"
              max-width="240px"
            >
              <a href="#">
                <img src="../../src/assets/icon/ticket.svg" class="card-img" />
              <div>
                <p class="fs-3 fw-bold">ຈອງປີ້ເຂົ້າຊົມ</p>
              </div>
              </a>
            </v-card>
          </v-col> -->
        </v-row>
      </div>
      <div class="text-center mt-3">
        <p class="text-primary fs-1">ເດີ່ນກິລາຍອດນິຍົມ</p>
        <div class=" d-mobile">
            <v-row>
              <v-col cols="12">
                <div class=" my-1">
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-card class="mx-auto" max-width="500">
                     <div>
                      <router-link to="/footballpay" class="text-d-none">
                         <v-img
                        class="white--text align-end"
                        height="150px"
                        src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                      >
                      </v-img>

                     <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                      </router-link>
                     </div>
                    </v-card>
                  </v-col>
                </div>
              </v-col>
                <v-col cols="12">
                <div class=" my-1">
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-card class="mx-auto" max-width="500">
                     <div>
                      <router-link to="/footballpay" class="text-d-none">
                         <v-img
                        class="white--text align-end"
                        height="150px"
                        src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                      >
                      </v-img>

                     <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                      </router-link>
                     </div>
                    </v-card>
                  </v-col>
                </div>
              </v-col>
               <v-col cols="12">
                <div class=" my-1">
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-card class="mx-auto" max-width="500">
                     <div>
                      <router-link to="/footballpay" class="text-d-none">
                         <v-img
                        class="white--text align-end"
                        height="150px"
                        src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                      >
                      </v-img>

                     <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                      </router-link>
                     </div>
                    </v-card>
                  </v-col>
                </div>
              </v-col>
               <v-col cols="12">
                <div class=" my-1">
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-card class="mx-auto" max-width="500">
                     <div>
                      <router-link to="/footballpay" class="text-d-none">
                         <v-img
                        class="white--text align-end"
                        height="150px"
                        src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                      >
                      </v-img>

                     <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                      </router-link>
                     </div>
                    </v-card>
                  </v-col>
                </div>
              </v-col>
            </v-row>
          </div>
        <div class="px-2 list-start d-responsive">
          <v-row>
            <v-col cols="12">
              <div class="my-3">
                <v-card class="p-2" elevation="10">
                  <router-link to="/footballpay" class="text-d-none">
                    <div>
                      <v-row>
                        <v-col cols="4" xl="3" lg="3" md="3" sm="4">
                          <img
                            src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                            class="list-img"
                          />
                        </v-col>
                        <v-col
                          cols="6"
                          xl="7"
                          lg="7"
                          md="7"
                          sm="6"
                          class="al-start"
                        >
                          <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                        </v-col>
                      </v-row>
                    </div>
                  </router-link>
                </v-card>
              </div>
            </v-col>
           <v-col cols="12">
              <div class="my-3">
                <v-card class="p-2" elevation="10">
                  <router-link to="/footballpay" class="text-d-none">
                    <div>
                      <v-row>
                        <v-col cols="4" xl="3" lg="3" md="3" sm="4">
                          <img
                            src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                            class="list-img"
                          />
                        </v-col>
                        <v-col
                          cols="6"
                          xl="7"
                          lg="7"
                          md="7"
                          sm="6"
                          class="al-start"
                        >
                          <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                        </v-col>
                      </v-row>
                    </div>
                  </router-link>
                </v-card>
              </div>
            </v-col>
             <v-col cols="12">
              <div class="my-3">
                <v-card class="p-2" elevation="10">
                  <router-link to="/footballpay" class="text-d-none">
                    <div>
                      <v-row>
                        <v-col cols="4" xl="3" lg="3" md="3" sm="4">
                          <img
                            src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                            class="list-img"
                          />
                        </v-col>
                        <v-col
                          cols="6"
                          xl="7"
                          lg="7"
                          md="7"
                          sm="6"
                          class="al-start"
                        >
                          <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                        </v-col>
                      </v-row>
                    </div>
                  </router-link>
                </v-card>
              </div>
            </v-col>
             <v-col cols="12">
              <div class="my-3">
                <v-card class="p-2" elevation="10">
                  <router-link to="/footballpay" class="text-d-none">
                    <div>
                      <v-row>
                        <v-col cols="4" xl="3" lg="3" md="3" sm="4">
                          <img
                            src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1060&t=st=1668427981~exp=1668428581~hmac=9c8a36052fb91f5d95d144ea7a440e2134e7b70e350dab7e9cf05c58b50f366c"
                            class="list-img"
                          />
                        </v-col>
                        <v-col
                          cols="6"
                          xl="7"
                          lg="7"
                          md="7"
                          sm="6"
                          class="al-start"
                        >
                          <p class="fs-4 fw-bold">ເດີ່ນເຕະບານ GG Sport</p>
                          <p>ໄລຍະທາງ: 10 KM</p>
                          <p>ເວລາ:ເປີດ-ປິດ = 9:00-20:00</p>
                        </v-col>
                      </v-row>
                    </div>
                  </router-link>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
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
<style>
a {
  text-decoration: none !important;
}
.card-img {
  width: 200px;
  height: 150px;
}
.list-img {
  width: 100%;
  height: 100%;
}
list-start {
  text-align: start !important;
}
.text-d-none {
  text-decoration: none !important;
}
.al-start {
  text-align: start !important;
}
/* .btn-main{
  margin-left: 12 0px;
} */

@media screen and (max-width: 490px) {
  .card-img {
    width: 140px !important;
    height: 120px !important;
  }
}
@media screen and (max-width: 590px) {
  .d-responsive {
    display: none;
  }
}
@media screen and (min-width: 590px) {
  .d-mobile {
    display: none;
  }
}
@media screen and (max-width: 350px) {
  .card-img {
    width: 100px !important;
    height: 80px !important;
  }
  
}
</style>
