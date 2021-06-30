<template>
  <v-app>
    <v-app-bar app color="black" dark height="150" >
      <v-spacer></v-spacer>

      <v-card class="mx-auto" outlined>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
    <v-row justify="space-around" class="ma-5">

     

 
      <v-card width="350" class="ma-2" v-for="(pr, index) of product" :key="index" outlined tile>
        <v-img
          height="200px"
          src="@/assets/images/car1.jpg" 
        
        > 
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="text-h6 white--text pl-0">${{pr.price}}</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-app-bar>

          <v-card-title class="white--text mt-8"></v-card-title>
        </v-img>

        <v-card-text>
          <div>
            <div class="font-weight-normal">
              <strong>{{pr.name}}</strong>
            </div>
            <div>Model : {{pr.model}}</div>
            <div>Year : {{pr.year}}</div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" width="90%" dark @click="detailpage(pr.id)">More Details</v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
  </v-app>
 
</template>

<script>

 import jsonData from "../../data";
export default {
  name: "Home",

  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    product : jsonData.products,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  
  methods:{
    detailpage(id) { 
       this.$router.push({
        name: "DetailById",
        params: { id: id },
         
      });
    },
  }
};
</script>
