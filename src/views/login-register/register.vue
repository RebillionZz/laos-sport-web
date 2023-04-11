<template>
    <div>
       <div class="text-center" >
        <h1 class="mt-5">ຍິນດີຕ້ອນຮັບ</h1>
        <p>ເຂົ້າສູ່ລະບົບ ເພື່ອຮັບສິດໃນການໃຊ້ </p>
          <h3>
             ລົງທະບຽນເພື່ອເປັນສະມາຊິກ Laosport 
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
      label="ຊື່"
      required
    ></v-text-field>

    <v-text-field
      v-model="Lastname"
      :counter="60"
      :rules="nameRules"
      label="ນາມສະກຸນ"
      required
    ></v-text-field>

    <v-text-field
      v-model="Email "
      label="Email"
      required
      class="mb-7"
    ></v-text-field>

    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="Country"
          outlined
          dense
          placeholder
        ></v-combobox>
      </v-col>
    </v-row>
    
    <v-text-field
      v-model="number"
      label="ເບີໂທ"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="ລະຫັດຜ່ານ"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      label="ຍືນຍັນລະຫັດຜ່ານ "
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="ຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ"
      required
    ></v-checkbox>

    <v-btn
      
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Register Now
    </v-btn>
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