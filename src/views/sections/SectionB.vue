<template>
  <base-section id="sectionasection" space="36">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card class="mx-auto pt-4 pb-8 px-4 fill-height">
            <v-row no-gutters justify="space-between" align="center">
              <v-card-title> Section B-1 Heading </v-card-title>
              <v-btn depressed>
                Section B-1 Button
              </v-btn>
            </v-row>

            <v-row no-gutters justify="space-between">
              <v-col>
                <v-card-subtitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia esse sed vitae, excepturi voluptatum, eveniet dolores
                  adipisci obcaecati explicabo ea laudantium, id doloremque
                  reiciendis eum consectetur nobis similique minima temporibus.
                </v-card-subtitle>
              </v-col>
              <v-img
                src="https://fakeimg.pl/240x200/ccc"
                max-width="240"
              ></v-img>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto pt-4 pb-8 px-4 fill-height">
            <v-row no-gutters justify="space-between" align="center">
              <v-card-title> Section B-2 Heading </v-card-title>
              <v-btn depressed>
                Section B-2 Button
              </v-btn>
            </v-row>

            <v-slide-group center-active show-arrows>
              <v-slide-item v-for="n in 15" :key="n" v-slot="{ toggle }">
                <v-card class="ma-4" width="192" height="168" @click="toggle">
                  <v-img src="https://fakeimg.pl/192x168/ccc"></v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>
<script>
export default {
  name: "SectionSectionA",

  data() {
    return {};
  },
};
</script>
