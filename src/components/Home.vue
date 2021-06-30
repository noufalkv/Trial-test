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
      <v-card width="350" class="ma-2" v-for="n in 9" :key="n" outlined tile>
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="text-h6 white--text pl-0">Messages</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-app-bar>

          <v-card-title class="white--text mt-8"></v-card-title>
        </v-img>

        <v-card-text>
          <div>
            <div class="font-weight-normal">
              <strong>2020 Cherry red car</strong>
            </div>
            <div>Model : A2</div>
            <div>Year : 2016</div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" width="90%" dark @click="detailpage">More Details</v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
  </v-app>
 
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    
  }),
  methods:{
    detailpage() { 
       this.$router.push({
        name: "DetailById",
        // params: { id: this.id },
         params: { id: Math.floor(Math.random() * 100)},
      });
    },
  }
};
</script>
