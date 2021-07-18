<template>
  <base-section id="sectionasection" space="36">
    <v-container>
      <base-section-heading title="Section A Heading" />

      <v-row>
        <v-col cols="3" v-for="item in 4" :key="item">
          <v-card class="mx-auto">
            <v-img src="https://fakeimg.pl/360x240/ccc"></v-img>

            <v-card-title> Card Title - {{ item }} </v-card-title>

            <v-card-subtitle> Card SubTitle - {{ item }} </v-card-subtitle>
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
