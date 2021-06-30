<template>
  <v-app>
    <v-app-bar app color="black" dark height="150">
      <v-spacer></v-spacer>

      <v-card class="mx-auto" outlined>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  v-model="carmodel"
                  :items="items"
                  label="Model"
                  dense
                  outlined
                  @change="filterData"
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-select
                  v-model="year"
                  :items="items"
                  label="Year"
                  dense
                  outlined
                  @change="filterData"
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field v-model="name" outlined label="Name" required @change="filterData"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row justify="space-around" class="ma-5">
        <v-col md="4" v-for="car in cars" :key="car.id">
          <car-widget v-bind="car"></car-widget>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CarWidget from "../components/CarWidget.vue";
export default {
  name: "Home",
  components: {
    "car-widget": CarWidget,
  },
  data: () => ({
    valid: false,
    carmodel: "",
    year: "",
    name: "",
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  mounted() {
    if (this.$store.getters.allCars.status == false) {
      this.$store.dispatch("loadCars");
    }
  },
  computed: {
    cars() {
      return this.$store.getters.allCars.data;
    },
  },
  methods: {
    filterData() {},
  },
};
</script>
