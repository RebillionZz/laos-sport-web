
<template>
  <v-app>
    <nav class="navbar navbar-expand-lg navbar-dark bg-laossport">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="../src/assets/WhatsApp_Image_2022-12-05_at_22.10.25-removebg-preview (2).png"
            alt=""
            height="50px"
            width="50px"
          />
          Laos Sport
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">
                <v-btn depressed color="#0a75ad" class="text-white">
                  ໜ້າຫຼັກ
                </v-btn>
              </router-link>
            </li>
            <li class="nav-item">
             <router-link to="/news">
                <v-btn depressed color="#0a75ad" class="text-white">
                  ຂ່າວສານ
                </v-btn>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="#">
                <v-btn depressed color="#0a75ad" class="text-white">
                  ຮ້ານຄ້າ
                </v-btn>
              </router-link>
            </li>
            <li class="nav-item">
              <!--<a class="nav-link active" aria-current="page" href="/ticket"
                >ຈອງປີ້ເຂົ້າຊົມ</a
              > -->
              <router-link to="/ticket">
                <v-btn depressed color="#0a75ad" class="text-white">
                  ຈອງປີ້ເຂົ້າຊົມ
                </v-btn>
              </router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ຈອງເດີ່ນ
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/football"
                    >ຈອງເດີ່ນບານເຕະ</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/badminton"
                    >ຈອງເດີ່ນຕີດອກປີກໄກ່</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <v-main>
      <router-view />
    </v-main>
    <div>
      <footer class="bg-laossport text-center text-white text-lg-start">
        <!-- Grid container -->
        <div class="container p-4">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">ບໍລິການລູກຄ້າ</h5>

              <p>ຄຳຖາມທີ່ມັກຖາມ</p>
              <p>ວິທີສັ່ງຊື້ສິນຄ້າ</p>
              <p>ວິທີຈ່າຍເງິນ</p>
              <p>ການຮັບປະກັນ</p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">ຕິດຕໍ່ພວກເຮົາ</h5>

              <p>Head Office +856 20 XXXXXXXX</p>
              <p>Showroom +856 20 XXXXXXXX</p>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2022 Copyright:
          <a class="text-white" href="laossport.netlify.app">Laos Sport</a>
        </div>
        <!-- Copyright -->
      </footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
  text-decoration: none !important;
}
.bg-laossport {
  background-color: #0a75ad;
}
.cl-laossport {
  color: #0a75ad;
}
.bg-laossports {
  background-clip: #002c43;
}
</style>
