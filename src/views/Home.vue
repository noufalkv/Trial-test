<template>
  <v-app>
    <v-app-bar app color="black" dark height="150">
      <v-spacer></v-spacer>

      <v-card class="mx-auto" outlined>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-autocomplete
                  v-model="filter.model"
                  :items="modelData"
                  label="Model"
                  dense
                  outlined
                  clearable
                  @change="filterData"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" md="4">
                <v-autocomplete
                  v-model="filter.year"
                  :items="yearData"
                  label="Year"
                  dense
                  clearable
                  outlined
                  @change="filterData"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="filter.name"
                  dense
                  outlined
                  label="Name"
                  required
                  @change="filterData"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row justify="space-around" class="ma-5">
        <v-col md="4" v-for="car in products" :key="car.id">
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
    filter: {},
    products: [],
  }),
  mounted() {
    if (this.$store.getters.allCars.status == false) {
      this.$store.dispatch("loadCars").then(() => {
        this.filterData();
      });
    } else {
      this.filterData();
    }
  },
  computed: {
    modelData() {
      return this.$store.getters.getCarData("model");
    },
    cars() {
      return this.$store.getters.allCars.data;
    },
    yearData() {
      return Array.from(Array(new Date().getFullYear() - 1980), (_, i) =>
        (i + 2000).toString()
      );
    },
  },
  methods: {
    filterData() {
      this.products = this.cars;
      if (this.filter.name) {
        this.products = this.products.filter((item) => {
          let name = item.name.toLowerCase();
          return name.includes(this.filter.name);
        });
      }
      if (this.filter.model) {
        this.products = this.products.filter(
          (item) => item.model == this.filter.model
        );
      }
      if (this.filter.year) {
        this.products = this.products.filter(
          (item) => item.year == this.filter.year
        );
      }
    },
  },
};
</script>
