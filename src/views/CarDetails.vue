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
    detailedProduct: "",
    product: jsonData.products,
  }),
  created() {
    if (typeof this.$route.params.id != "undefined") {
      this.id = this.$route.params.id;
      this.productDetails(this.id);
    }
  },
  methods: {
    productDetails(id) {
      this.detailedProduct = this.product.find((n) => n.id === id);
    },
  },
};
</script>
