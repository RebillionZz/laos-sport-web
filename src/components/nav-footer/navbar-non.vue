<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-laossport">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            NTR SPORT
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
                <!--<a class="nav-link active" aria-current="page" href="/ticket"
                  >ຈອງປີ້ເຂົ້າຊົມ</a
                > -->
                <router-link to="/badminton">
                  <v-btn depressed color="#0a75ad" class="text-white">
                    ຈອງປີ້ເດີນຕີດອກປີກໄກ່
                  </v-btn>
                </router-link>
              </li>
  
              <li class="nav-item">
                <router-link to="/football">
                  <v-btn depressed color="#0a75ad" class="text-white">
                    ຈອງປີ້ເດີນເຕະບານ
                  </v-btn>
                </router-link>
              </li>
              <div class="collapse navbar-collapse">
              <li class="nav-item">
                <router-link to="#" >
                  <v-btn depressed color="#0a75ad" class="text-white">
                    Sign up
                  </v-btn>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#">
                  <v-btn depressed color="#0a75ad" class="text-white">
                    Login
                  </v-btn>
                </router-link>
              </li>
            </div>
            </ul>
          </div>
        </div>
      </nav>
</template>

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

<script>
export default {
  name: 'NavBarNon'
}
</script>