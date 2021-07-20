<template lang="pug">
  div
    //- 中螢幕(sm)以下高度變112(隱藏連結)
    v-app-bar(id="home-app-bar" ref="appbar" app prominent shrink-on-scroll elevate-on-scroll :height="screenSize<=960?112:156" width="100%" v-scroll="onScroll")
      //- 標題Logo
      //- 離開頂部後改變狀態(移動到左側、字變小)
      a.appBarTitle(href="/" :class="{'leaveTop': leaveTop}")
        span {{ appBarTitle }}
        v-chip(outlined x-small) {{ appBarSubTitle }}
      //- 連結清單
      //- 中螢幕(sm)以下隱藏
      v-row.ma-0.tabs.hidden-sm-and-down
        v-col.pa-0.tab(v-for="(tab, index) in tabs" :key="tab.hash") 
          v-menu(v-if="tab.menu" transition="slide-y-transition" bottom offset-y open-on-hover nudge-top="-4" nudge-left="8" nudge-width="16")
            template(v-slot:activator="{ on, attrs }")
              v-btn(text v-bind="attrs" v-on="on") {{ tab.name }}
            v-card.d-flex.flex-column.pt-3.pb-1
              v-btn.menubtn.mb-1(v-for="(item, i) in tab.menu" :key="i" text tile) {{ item.title }}
          v-btn(v-else text) {{ tab.name }}
      //- 社群連結
      //- 滑入時變色
      //- 離開頂部時加上.leaveTop 中螢幕(sm)以下加上右距 給漢堡位置
      .btnGroup(:class="{'leaveTop': leaveTop}")
        v-hover(v-slot="{ hover }")
          v-btn.mr-1(icon :color="hover?'#37589b':''" small) 
            v-icon mdi-facebook
        v-hover(v-slot="{ hover }")
          v-btn.mr-1(icon :color="hover?'#F56040':''" small) 
            v-icon mdi-instagram
        v-hover(v-slot="{ hover }")
          v-btn.mr-1(icon :color="hover?'#34A853':''" small) 
            v-icon mdi-gmail
      //- 漢堡
      //- 中螢幕(sm)以下顯示
      //- 小螢幕(xs)時margin-right改為0 (防止破圖)
      v-app-bar-nav-icon.hidden-md-and-up.hamberger(@click="drawer = !drawer" absolute right)
      //- 側邊選單
      //- 中螢幕(sm)以下可顯示
      v-navigation-drawer(v-model="drawer" absolute app right :width="screenSize<=600?'80%':'360'")
        v-list
          v-list-item
            v-spacer
            v-btn(icon @click="drawer = !drawer")
              v-icon mdi-close
          v-list-group(v-for="tab in tabs" :key="tab.name")
            template(v-slot:activator)
              v-list-item-content.pl-8
                v-list-item-title {{ tab.name }}
            v-list-item(v-for="item in tab.menu" :key="item.title" link)
              v-list-item-content.pl-8
                v-list-item-title 
                  span.grey--text － 
                  span {{ item.title }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer"),
  },

  data: () => ({
    drawer: false,
    appBarTitle: "Calf Wedding",
    appBarSubTitle: "PHOTOGRAPHY",
    tabs: [
      {
        name: "首頁",
        hash: "home",
        menu: [
          { title: "精選作品", path: "/" },
          { title: "專業服務", path: "/" },
          { title: "好評分享", path: "/" },
          { title: "聯絡我們", path: "/" },
        ],
      },
      {
        name: "關於我們",
        hash: "about",
        menu: [
          { title: "專業服務", path: "/" },
          { title: "團隊成員", path: "/" },
          { title: "好評分享", path: "/" },
        ],
      },
      {
        name: "攝影作品",
        hash: "portfolio",
        menu: [
          { title: "婚禮攝影", path: "/" },
          { title: "婚禮錄影", path: "/" },
          { title: "婚禮MV", path: "/" },
          { title: "婚紗", path: "/" },
          { title: "孕婦寫真", path: "/" },
          { title: "家庭寫真", path: "/" },
          { title: "主題故事", path: "/" },
        ],
      },
      {
        name: "優惠方案",
        hash: "discount",
        menu: [
          { title: "婚攝/婚錄", path: "/" },
          { title: "婚紗禮服", path: "/" },
          { title: "新秘", path: "/" },
          { title: "孕婦寫真", path: "/" },
          { title: "家庭寫真", path: "/" },
        ],
      },
      {
        name: "檔期預約",
        hash: "reservation",
        menu: [
          { title: "線上預約", path: "/" },
          { title: "檔期查詢", path: "/" },
        ],
      },
      {
        name: "聯絡我們",
        hash: "contact",
        menu: [
          { title: "線上留言", path: "/" },
          { title: "服務條款", path: "/" },
          { title: "隱私政策", path: "/" },
        ],
      },
    ],
  }),

  methods: {
    // 滑動時設定與頂部距離
    onScroll() {
      this.$store.dispatch("offsetTop", window.scrollY);
    },
  },

  computed: {
    // 取得與頂部距離
    ...mapGetters(["offsetTop"]),
    leaveTop() {
      return this.offsetTop > 0 ? true : false;
    },
    // 取得螢幕寬
    screenSize() {
      return this.$vuetify.breakpoint.width;
    },
  },
};
</script>

<style lang="sass">
.v-toolbar__content
  width: 100%

.v-list-item__icon
  padding-right: 12px
</style>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap')

$color-orange-pink: #fb6b5e

#home-app-bar
  display: flex
  flex-direction: column
  align-items: center
  border-bottom: 1px solid rgba($color-orange-pink,0.5)
  box-shadow: 0px 2px 4px -1px rgb($color-orange-pink,0.2), 0px 4px 5px 0px rgb($color-orange-pink,0.14), 0px 1px 10px 0px rgb($color-orange-pink,0.12)
  transition: 1s

.appBarTitle
  position: absolute
  left: 50%
  top: 12px
  transform: translateX(-50%)
  text-decoration: none
  color: rgba(black,0.8) !important
  width: max-content
  display: flex
  flex-direction: column
  align-items: center
  transition: 1s
  span:nth-child(1)
    font-family: 'Alex Brush', cursive
    font-size: 3.5rem
    letter-spacing: 2px
    text-shadow: 3px 3px 5px rgba(black,0.2)
    transition: 1s
  span:nth-child(2)
    color: rgba($color-orange-pink,0.6)
    border-color: rgba($color-orange-pink,0.4)
    font-size: 0.5rem
    letter-spacing: 4px
    margin-top: -18px
    padding: 0 2px 0 6px
    transition: 1s
  &.leaveTop
    left: 20px
    top: 50%
    transform: translateY(-50%)
    span:nth-child(1)
      letter-spacing: 1px
      font-size: 2rem
    span:nth-child(2)
      display: none

.tabs
  position: absolute
  left: 50%
  transform: translateX(-50%)
  width: 60%
  bottom: 10px
  .tab
    width: max-content
    text-align: center
    font-family: '微軟正黑體'
    font-size: 1rem
    font-weight: bold
    button
      &::before
        background-color: unset

// 連結Menu加入上三角
.v-menu__content
  contain: none
  overflow: unset
  &::before
    content: ""
    position: absolute
    left: 50%
    top: -7px
    transform: translateX(-50%) rotate(45deg)
    background-color: #fff
    width: 1rem
    height: 1rem
    border-radius: 2px
    box-shadow: -5px -5px 10px rgba(black,0.1)
    z-index: 1
  &::after
    content: ""
    position: absolute
    width: 60%
    height: 16px
    left: 50%
    top: 0
    transform: translateX(-50%)
    z-index: 1

.menubtn
  color: rgba(black,0.8)
  transition: 0.3s
  &:hover
    color: $color-orange-pink

.btnGroup
  position: absolute
  right: 11px
  bottom: 12px
  transition: 1s

@media (max-width: 600px)
  .btnGroup
    display: none

  .hamberger
    margin-right: 0 !important

@media (max-width: 960px)
  .btnGroup.leaveTop
    right: 48px
</style>
