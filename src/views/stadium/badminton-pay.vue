<template>
    <div>
      <v-container>
        <div class="text-center mb-2">
          <v-img
            src="https://img.freepik.com/free-photo/badminton-racket-shuttlecocks_23-2148849185.jpg?w=1060&t=st=1667897234~exp=1667897834~hmac=9244570628f6aeacc9652d8235ecb91053f41ccc9e1f645cf27fb0414a9c4f05"
            max-height="480px"
            max-width="1200px"
          >
          </v-img>
        </div>
  
        <div class="my-2">
          <h2>ເດີ່ນຕີດອກປີກໄກ່ GG Sport</h2>
          <div class="ml-2">
            <p>ມື້ທີ່ເປີດບໍລິການ: ຈັນ-ອາທິດ</p>
            <p>ເວລາເປີດ - ປິດ: ຈັນ-ສຸກ 16:00-22:00, ເສົາ-ອາທິດ 12:00-22:00</p>
            <p>
              ສິ່ງອຳນວຍຄວາມສະດວກ: ບ່ອນຈອດລົດ, ຫ້ອງນ້ຳ,
              ເຄື່ອງກິລາ, Wi-Fi
            </p>
            <p>ຈຳນວນເດີ່ນ: 8 ເດີ່ນ</p>
          </div>
        </div>
        <div class="mt-2">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                ເລືອກເດີ່ນ
              </v-stepper-step>
  
              <v-divider></v-divider>
  
              <v-stepper-step :complete="e1 > 2" step="2">
                ຢືນຢັນກ່ອນຈອງ
              </v-stepper-step>
  
              <v-divider></v-divider>
  
              <v-stepper-step step="3"> ສະຖານະການຈອງ </v-stepper-step>
            </v-stepper-header>
  
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-12" color="#f2f2f2    " height="350px">
                  <div class="pas">
                    <v-row>
                      <v-col cols="12" xl="6" lg="6" md="6">
                        <h4>ເລືອກເດີ່ນ</h4>
                        <v-select
                          :items="items"
                          label="ເລືອກເດີ່ນທີ່ຕ້ອງການ"
                          dense
                          solo
                        ></v-select>
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6">
                        <h4>ເລືອກເວລາ</h4>
                        <v-select
                          :items="time"
                          label="ເລືອກເວລາທີ່ຈະຈອງ"
                          dense
                          solo
                        ></v-select>
                      </v-col>
                       <v-col cols="12" xl="6" lg="6" md="6">
                        <h4>ເລືອກວິທີການຊຳລະເງິນ</h4>
                        <v-select
                          :items="pay"
                          label="ເລືອກວິທີການຊຳລະເງິນ"
                          dense
                          solo
                        ></v-select>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
  
                <v-btn color="primary" @click="e1 = 2"> ຕໍ່ໄປ </v-btn>
  
                <v-btn text> ຍົກເລີກ </v-btn>
              </v-stepper-content>
  
              <v-stepper-content step="2">
                <v-card class="mb-12" color="#f2f2f2    " height="270px">
                  <div class="pas">
                    <v-row>
                      <v-col cols="12" xl="6" lg="6" md="6">
                        <h4>ໃຊ້ສ່ວນຫຼຸດ</h4>
                        <v-text-field
              label="ປ້ອນລະຫັດສ່ວນຫຼຸດໃນການຈອງ"
              placeholder="ປ້ອນລະຫັດສ່ວນຫຼຸດໃນການຈອງ"
              solo
            ></v-text-field>
                  </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" >
                        <h4>ຈຳນວນເງິນທີ່ຕ້ອງຈ່າຍ</h4>
                        <p>
                          xxx.xxx kip
                        </p>                     
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
  
                <v-btn color="primary" @click="e1 = 3"> ຕໍ່ໄປ </v-btn>
  
                <v-btn text> ຍົກເລີກ </v-btn>
              </v-stepper-content>
  
              <v-stepper-content step="3">
                 <v-card class="mb-12" color="#f2f2f2    " height="270px">
                  <div class="pas text-center">
                   <h2>ການຈອງສຳເລັດ</h2>
                   <div class=" ticks" >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" alt="Completes">
                   </div>
                  </div>
                </v-card>
  
                <v-btn color="primary" @click="e1 = 1">
                  <v-icon
                  dark
                  left
                  >mdi-checkbox-marked-circle</v-icon> ຢືນຢັນ </v-btn>
                <v-btn text> ຍົກເລີກ </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        e1: 1,
         items: ['ເດີ່ນ 1', 'ເດີ່ນ 2', 'ເດີ່ນ 3', 'ເດີ່ນ 4', 'ເດີ່ນ 5', 'ເດີ່ນ 6', 'ເດີ່ນ 7', 'ເດີ່ນ 8'],
         time: ['12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00'],
         pay: ['ຊຳລະຜ່ານທະນາຄານ BC1', 'ຊຳລະຜ່ານທະນາຄານ DV3', 'ຊຳລະຜ່ານທະນາຄານ WF4'],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  *{
    font-family: Noto Sans Lao;
  }
  .pas {
    padding: 10px;
  }
  .ticks {
    width: 150px;
    height: 150px;
    margin: auto;
    margin-top: 29px;
  }
  </style>