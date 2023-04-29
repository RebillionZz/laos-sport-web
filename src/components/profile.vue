<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <!-- Profile Picture -->
          <v-card>
            <v-img src="https://via.placeholder.com/150" />
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <!-- Profile Information -->
          <v-card>
            <v-card-title>My Profile</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="First Name" v-model="firstName" />
                <v-text-field label="Last Name" v-model="lastName" />
                <v-text-field label="Email" v-model="email" />
                <v-text-field label="Phone Number" v-model="phoneNumber" />
                <v-text-field label="Address" v-model="address" />
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>       
  export default {
    name :"MyProfile",
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
      };
    },
  };
  </script>