<template lang="pug">
  v-footer(id="home-footer" color="grey darken-4" dark min-height="72")
    v-container
      v-row
        v-col(cols="12" md="8").seoBlock
          .d-flex.flex-wrap.justify-md-start.justify-center.justify-md-none.seo
            template(v-for="(s, i) in social")
              a.white--text.pa-1.pa-md-0(:key="s" href="#" v-text="`${s}`")
              span.di(v-text="`${i<social.length-1?'｜':''}`")
              v-responsive.shrink.hidden-sm-and-down(v-if="i < social.length - 1" :key="`divider-${s}`" max-height="24")
        v-col.text-center.text-md-right(cols="12" md="4") 
          span.copyright Copyright &copy; 2021 SteelCalf Web Design
</template>

<script>
export default {
  name: "HomeFooter",

  data: () => ({
    social: [
      "網頁設計",
      "網站設計",
      "網站架設",
      "網站製作",
      "網站建置",
      "RWD網頁",
      "SEO",
    ],
  }),
};
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
  font-size: 14px
  color: rgba(white,0.5) !important
  transition: 0.3s
  &:hover
    color: white !important
    font-weight: 700
</style>

<style lang="sass" scoped>
.copyright, .di
  font-size: 14px

.seoBlock
  position: relative
  .seo
    position: absolute
    top: calc(50%)
    left: 12px
    transform: translateY(-50%)
</style>
