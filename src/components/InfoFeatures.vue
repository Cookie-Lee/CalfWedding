<template>
  <base-info-card title="Fake Info Title - 3">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
export default {
  name: "SectionFeaturesAlt",

  data: () => ({
    features: [
      "Fake Info Features - 1",
      "Fake Info Features - 2",
      "Fake Info Features - 3",
      "Fake Info Features - 4",
      "Fake Info Features - 5",
    ],
  }),
};
</script>
