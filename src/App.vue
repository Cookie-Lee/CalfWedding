<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "App",
    titleTemplate: "Calf Wedding",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>

<style lang="sass">
a
  color: white !important

.comment
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  text-align: center
  padding: 2px 12px 0px 12px
  color: white
  background-color: rgba(black,0.4)
  font-size: 8px
</style>
