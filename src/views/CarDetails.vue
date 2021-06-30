<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-card class="mx-auto">
        <v-card-text>
          <v-row class="text-left" justify="space-around" width="80%">
            <v-col cols="6">
              <v-img :src="require('../assets/images/car1.jpg')" class contain height="400" />
            </v-col>

            <v-col class="mt-6">
              <h1 class="display-5 font-weight-bold mb-3">
                <strong>{{car.name}}</strong>
              </h1>

              <div>Model :{{car.model}}</div>
              <div>Year : {{car.year}}</div>

              <p class="subheading font-weight-regular">{{car.description}}</p>
              <v-card-actions>
                <v-btn color="primary">Order Now</v-btn>
                <v-btn top right color="grey" dark @click="$router.go(-1)">Go Back</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    id: "",
    car: "",
  }),
  created() {
    if (typeof this.$route.params.id != "undefined") {
      this.id = this.$route.params.id;
    }
  },
  mounted() {
    if (this.$store.getters.allCars.status == false) {
      this.$store.dispatch("loadCars").then(() => {
        this.carDetails();
      });
    } else {
      this.carDetails();
    }
  },
  methods: {
    carDetails() {
      this.car = this.$store.getters.getCarById(this.id);
    },
  },
};
</script>
