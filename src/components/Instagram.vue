<template>
  <base-info-card title="Instagram">
    <v-row dense>
      <v-col v-for="n in 6" :key="n" cols="auto">
        <base-img
          src="https://fakeimg.pl/96x64/ccc"
          color="grey lighten-1"
          width="96"
        />
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
export default {
  name: "Instagram",
};
</script>
