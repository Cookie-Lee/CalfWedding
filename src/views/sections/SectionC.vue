<template>
  <base-section id="sectionasection" space="36">
    <v-container>
      <base-section-heading title="Section C Heading" />
      <v-slide-group center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ toggle }">
          <v-card class="ma-4" width="280" height="200" @click="toggle">
            <v-img src="https://fakeimg.pl/280x200/ccc"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
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
