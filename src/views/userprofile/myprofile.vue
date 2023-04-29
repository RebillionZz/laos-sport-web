<template>
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" md="3">
          <!-- Profile Picture -->
          
            <v-img src="../../assets/icon/user'sprofileimg.svg" />
          
        </v-col>
        <v-col cols="12" md="8">
          <!-- Profile Information -->
          <v-card>
            <v-card-title>MY PROFILE</v-card-title>
            <v-card-text>
            <div class="px-3 mx-3 text-align-center">
              <p> Name & Lastname</p>
              <h3> Mr. Vixava Thammavong (Wasabi)</h3> <br>
              <p> Email Address</p> 
              <h4> BiewThammavongGG@gmail.com</h4> <br>
              <p>Phone Number </p>
              <h4>  +856 99973859</h4> <br>
              <p> Address</p>
              <h4> Faculty of Engineering (NUOL), Lao-Thai Road, Vientiane</h4> <br>
            </div>
            </v-card-text>
            <v-btn
      
      color="primary"
      class="mx-4 my-4 justify-content-around"
      @click="validate"
      
    >
      Change Status
    </v-btn>
          </v-card>
        </v-col>
      </v-row>

      
    <!-- <v-toolbar
      color="#0a75ad"
      dark
      flat
      class="mt-4"
    >
      <template >
        <v-tabs
          v-model="tab"
          class="d-flex justify-content-around"
        >
          <v-tabs-slider color="light white"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
            
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        
      >
        
        <v-card flat>
          <v-card-text>a person's name, address, phone number or
             email address. a photograph of a person. a video recording of a person, whether CCTV or otherwise, 
            for example, a recording of events in a classroom, at a train station, or at a family barbecue.</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        
      >
          
        <v-card flat>
          <v-card-text>a person's name, address, phone number or
             email address. a photograph of a person. a video recording of a person, whether CCTV or otherwise, 
            for example, a recording of events in a classroom, at a train station, or at a family barbecue.</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        
      >
          
        <v-card flat>
          <v-card-text>a person's name, address, phone number or
             email address. a photograph of a person. a video recording of a person, whether CCTV or otherwise, 
            for example, a recording of events in a classroom, at a train station, or at a family barbecue.</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  
    <!-- <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        BASiL
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card> -->
</v-container>
  </template>
  
<script>
export default {
        name: 'ProfilePage',
  data () {
    return {
      tab: null,
        items: [
          'Personal Information', 'Booking History', ' Surport Or assistance',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
<style lang="scss" scoped>
p{
  color:rgb(94, 94, 213) ;
  padding-bottom: px;
}
  
</style>