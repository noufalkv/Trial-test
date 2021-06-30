<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container></v-container>
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
        this.productDetails();
      });
    } else {
      this.productDetails();
    }
  },
  methods: {
    productDetails() {
      this.car = this.$store.getters.getCarByFilter("id", this.id);
      console.log(this.$store.getters.getCarById(3));
    },
  },
};
</script>
