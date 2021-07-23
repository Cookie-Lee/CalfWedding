<template lang="pug">
  section(id="bannersection")
    v-carousel.carousel(:height="this.$vuetify.breakpoint.width<=960?'calc(100vh - 112px)':'calc(100vh - 156px)'" cycle interval="6000" hide-delimiters :show-arrows="false")
      v-carousel-item(v-for="(banner,i) in banner" :key="i" reverse-transition="my-fade" transition="my-fade")
        v-img(:src="banner.src" eager height="100%")
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

  created() {},

  data() {
    return {
      banner: [
        {
          src: banner1,
          text:
            'Photo by <a href="https://unsplash.com/@alichoubin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ali Choubin</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
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
            'Photo by <a href="https://unsplash.com/@wedding_dreamz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wedding Dreamz</a> on <a href="https://unsplash.com/s/photos/wedding-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
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

@media (max-width: 960px)
  .carousel
    margin-top: 112px

// 自定義淡入淡出動畫
.my-fade-enter-active, .my-fade-leave-active
  transition: all 1s

// 加入position: absolute動畫重疊效果
.my-fade-enter, .my-fade-leave-to
  position: absolute
  width: 100%
  opacity: 0

.my-fade-enter-to, .my-fade-leave
  position: absolute
  width: 100%
  opacity: 1
</style>
