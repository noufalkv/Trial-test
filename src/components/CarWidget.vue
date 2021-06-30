<template>
  <v-card width="350" class="ma-2" outlined tile>
    <v-img height="200px" src="@/assets/images/car1.jpg">
      <!-- <v-img height="200px" :src="pr.image"> -->

      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h6 white--text pl-0">${{price}}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-card-title class="white--text mt-8"></v-card-title>
    </v-img>

    <v-card-text>
      <div>
        <div class="font-weight-normal">
          <strong>{{name}}</strong>
        </div>
        <div>Model : {{model}}</div>
        <div>Year : {{year}}</div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="grey" width="90%" dark @click="gotoDetailsPage">More Details</v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  props: {
    id: { type: Number },
    name: { type: String },
    model: { type: String },
    year: { type: Number },
    image: { type: String },
    price: { type: Number },
    description: { type: String },
  },

  methods: {
    gotoDetailsPage() {
      this.$router.push({
        name: "DetailById",
        params: { id: this.id },
      });
    },
  },
};
</script>
