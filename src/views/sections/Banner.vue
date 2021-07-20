<template lang="pug">
  section(id="bannersection")
    v-carousel.carousel(:height="this.$vuetify.breakpoint.width<=960?'calc(100vh - 112px)':'calc(100vh - 156px)'" cycle interval="6000" hide-delimiters :show-arrows="false")
      v-carousel-item(v-for="(banner,i) in banner" :key="i" :src="banner.src" reverse-transition="fade-transition" transition="fade-transition")
        span.comment(v-html="banner.text")
</template>

<script>
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.jpg";
import banner5 from "../../assets/banner/banner5.jpg";
import banner6 from "../../assets/banner/banner6.jpg";

export default {
  name: "SectionBanner",

  data() {
    return {
      banner2,
      banner: [
        { src: banner1, text: "Photo by Jonathan Borba on Unsplash" },
        {
          src: banner2,
          text:
            "Photo by <a href='https://unsplash.com/@autthaporn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Mr.Autthaporn Pradidpong</a> on <a href='https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
        },
        {
          src: banner3,
          text:
            'Photo by <a href="https://unsplash.com/@infectedluna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Asdrubal luna</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: banner4,
          text:
            'Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: banner5,
          text:
            'Photo by <a href="https://unsplash.com/@insvezia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sofia</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: banner6,
          text:
            'Photo by <a href="https://unsplash.com/@alichoubin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ali Choubin</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
      ],
    };
  },

  computed: {},
};
</script>

<style lang="sass" scoped>
.carousel
  margin-top: 156px

.comment
  background-color: rgba(black,0.4)
  padding: 2px 12px 0px 12px
  position: absolute
  right: 0
  bottom: 0

@media (max-width: 960px)
  .carousel
    margin-top: 112px
</style>
