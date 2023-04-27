
<template>
  <v-app>
      <MyNavBar/>
    <v-main>
      <router-view />
    </v-main>
    <div>
      <MyFooter/>
    </div>
  </v-app>
</template>

<script>
import MyNavBar from './components/nav-footer/navbar.vue'
import MyFooter from './components/nav-footer/footer.vue'
export default {
  name: "App",
  components: {
    MyFooter,
    MyNavBar
  },
 

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
