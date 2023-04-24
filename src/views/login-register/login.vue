<template>
    <div>
       <div class="text-center" >
        <h1 class="mt-5">ຍິນດີຕ້ອນຮັບ</h1>
   
          <h3>
            ລົງຊື່ເຂົ້າໃຊ້ເພື່ອເຂົ້າສູລະບົບ Laosport 
          </h3>
        
            <v-container >
                <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    cols="6" xl="3" lg="3" md="4" sm="6"
  >
    <v-text-field
      v-model="name"
      :counter="60"
      :rules="nameRules"
      label="ຊື່ ຫຼື ເບີໂທລະສັບ"
      required
    ></v-text-field>

    <v-text-field
      v-model="Email "
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model=" password "
      label="ລະຫັດຜ່ານ"
      required
    ></v-text-field>



    <v-btn
      
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Login
    </v-btn>
    
    <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
  </v-form>

            </v-container>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'LaosSportLogin',

    data() {
        return {
        items: [
          'Laos (+856)',
          'Thailand(+66)',
        ],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
  
</style>