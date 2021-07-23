<template lang="pug">
  base-section(id="servicessection" space="36")
    //- 標題
    .heading.mb-4
      .chtitle {{ title }}
      .engtitle {{ engTitle }}
    v-row(no-gutters)
      //- 專業服務
      v-col.servicesBlock(cols="12" v-for="(item,i) in services" :key="i")
        div(v-intersect="onIntersect" :data-idx="i")
          transition(:name="i%2===0?'my-fade-slide-left':'my-fade-slide-right'")
            v-row(no-gutters align="center" :class="{'flex-row-reverse': i%2===1, '.flex-row': i%2===0}" v-show="show[i]")
              v-col(cols="12" md="6")
                .imgBlock
                  v-img.img(:src="item.src" :aspect-ratio="`${3/2}`")
                  span.comment(v-html="item.comment")
              v-col(cols="12" md="6")
                .textBlock.px-8.py-8
                  .engTitle {{ item.engtitle }}
                  .chtTitle {{ item.chtitle }}
                  .content.mt-2 {{ item.content }}
</template>
<script>
import services1 from "../../assets/services/services1.jpg";
import services2 from "../../assets/services/services2.jpg";
import services3 from "../../assets/services/services3.jpg";
import services4 from "../../assets/services/services4.jpg";

export default {
  name: "SectionServices",

  data() {
    return {
      show: [],
      engTitle: "SERVICES",
      title: "專業服務",
      services: [
        {
          src: services1,
          chtitle: "婚禮攝影",
          engtitle: "WEDDING",
          content:
            "婚紗攝影、婚紗照是一種個人或是工作室所進行的商業活動，而現今的婚紗攝影受到了數位化的影響，除了拍照本身之外，通常需要與其他產業結合。拍攝婚禮進行中的新人與其親友、訪客。除了一般面對鏡頭擺出姿態的拍照形式之外，也包括報導式的攝影（例如跳舞中的新娘或是正在唱歌的親友）。",
          comment:
            'Photo by <a href="https://unsplash.com/@thomasw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas William</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: services2,
          chtitle: "自助婚紗",
          engtitle: "PRE WEDDING",
          content:
            "自助婚紗是指新人自由選擇攝影師、造型師、禮服等等，不受婚紗攝影包套內容限制的一種攝影新消費形式，有別於制式大型的婚紗店，專門為想要有自己想法或概念的人所設計的婚紗照方式。相信很多新人拍婚紗照都有這樣一個煩惱，在婚紗包套裡面的林林總總產品，有些不想要的，想推卻推不掉，想要的還要在套系之外二次消費。",
          comment:
            'Photo by <a href="https://unsplash.com/@eugenivy_now?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Євгенія Височина</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: services3,
          chtitle: "孕婦寫真",
          engtitle: "PREGNANCY",
          content:
            "「孕婦裸體寫真」是指孕婦在懷孕期間所拍攝的寫真照片，亦在珍藏人生美好的回憶。日本專家稱，拍攝孕婦裸體寫真為即將成為人母的女性帶來奇妙的感受，也有助緩解對赤裸的恐懼。",
          comment:
            'Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/s/photos/pregnancy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          src: services4,
          chtitle: "家庭寫真",
          engtitle: "FAMALIES",
          content:
            "是一個家庭團聚的紀念，是一個組織團結築夢的表現，是每一個家庭成員發自內心對家團結和諧的凝聚力。一張全家福，定格了家的團聚時刻，凝聚親情、凝聚夢想，是人們追尋幸福的影像記錄。一張全家福，像族譜一樣記載家庭、企業、組織的成員變化和重要時刻，傳遞出不同家的情感和夢想。",
          comment:
            'Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/families?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
      ],
    };
  },

  methods: {
    onIntersect(entries, observer) {
      let index = entries[0].target.dataset.idx;
      if (entries[0].isIntersecting) {
        this.show.splice(index, 1, true);
      } else {
        // this.show.splice(index, 1, false);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
$color-orange-pink: #fb6b5e

#servicessection
  min-height: 600px

// 標題置中 超出隱藏
.heading
  text-align: center
  overflow: hidden
  // 英文標題
  .engtitle
    position: relative
    display: inline-block
    color: rgba($color-orange-pink,0.5)
    letter-spacing: 1rem
    margin-right: -1rem
    font-size: 12px
    // 左襯線
    &::before
      content: ''
      position: absolute
      top: 50%
      left: -80%
      transform: translateY(-50%)
      width: 70%
      border: 1px solid rgba($color-orange-pink,0.2)
    // 右襯線
    &::after
      content: ''
      position: absolute
      top: 50%
      left: calc(110% - 1rem)
      transform: translateY(-50%)
      width: 70%
      border: 1px solid rgba($color-orange-pink,0.2)
  // 中文標題
  .chtitle
    letter-spacing: 0.5rem
    margin-right: -0.5rem
    font-size: 20px

.imgBlock
  position: relative

.textBlock
  position: relative
  background-color: rgba(white,0.7)
  .engTitle
    color: rgba(black,0.5)
    letter-spacing: 0.5rem
    margin-right: -0.5rem
    font-size: 8px
  .chtTitle
    color: rgba(black,0.8)
    letter-spacing: 0.5rem
    margin-right: -0.5rem
    font-size: 24px
  .content
    color: rgba(black,0.7)
    letter-spacing: 0.1rem
    font-size: 14px

@media (min-width: 960px)
  #servicessection
    background-color: rgba(#ccc,0.1)

  .servicesBlock
    margin: 32px 0 64px 0

  .imgBlock
    box-shadow: 0 0 20px rgba(black,0.3)
    transform: translate(5%,0)

  .textBlock
    box-shadow: 0 0 10px rgba(black,0.2)
    transform: translate(-35%,0)
    .engTitle
      margin-left: 4px

  .flex-row-reverse
    .imgBlock
      transform: translate(-5%,0)

    .textBlock
      transform: translate(35%,0)

@media (max-width: 960px)
  .textBlock
    text-align: center

// 自定義淡入淡出動畫
.my-fade-slide-left-enter-active, .my-fade-slide-left-leave-active,
  .my-fade-slide-right-enter-active, .my-fade-slide-right-leave-active
  transition: all 0.6s

.my-fade-slide-left-enter, .my-fade-slide-left-leave-to
  transform: translateX(50%)
  opacity: 0

.my-fade-slide-right-enter, .my-fade-slide-right-leave-to
  transform: translateX(-50%)
  opacity: 0
</style>
