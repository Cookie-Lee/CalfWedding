<template lang="pug">
  base-section(id="portfoliosection" space="36")
    v-container
      //- 標題
      .heading.mb-4
        .chtitle {{ title }}
        .engtitle {{ engTitle }}
      v-row(v-intersect.once="onIntersect")
        //- 作品精選
        v-col(cols="12" sm="6" md="4" v-for="(item,i) in portfolio" :key="i")
          transition(name="my-fade-slide")
            div(v-show="show[i]")
              //- 圖片
              .portfolioImg(v-ripple)
                v-img.img(:src="item.src")
                span.comment(v-html="item.comment")
              //- 標題
              .portfolioTitle {{ item.title }}
</template>
<script>
import portfolio1 from "../../assets/portfolio/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio/portfolio6.jpg";

export default {
  name: "SectionPortfolio",

  data() {
    return {
      show: [],
      isIntersecting: false,
      engTitle: "PORTFOLIO",
      title: "精選作品",
      portfolio: [
        {
          src: portfolio1,
          comment:
            'Photo by <a href="https://unsplash.com/@alvarocvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Álvaro CvG</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
          title: "[婚攝] Eric & Janie - 真愛庭園",
        },
        {
          src: portfolio2,
          comment:
            'Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
          title: "[戶外婚紗] 子雲 & 侑熙 - 淡水河畔",
        },
        {
          src: portfolio3,
          comment:
            'Photo by <a href="https://unsplash.com/@ivancabanhas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Cabañas</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
          title: "[戶外婚紗] Leo & Tina - 向日葵農場",
        },
        {
          src: portfolio4,
          comment: "Photo by Unsplash",
          title: "[室內婚紗] 德斌 & 家蕓 - 婚紗攝影",
        },
        {
          src: portfolio5,
          comment:
            'Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
          title: "[戶外婚紗] Denial & Jessica - 台中",
        },
        {
          src: portfolio6,
          comment:
            'Photo by <a href="https://unsplash.com/@lee_hisu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hisu lee</a> on <a href="https://unsplash.com/s/photos/wedding-driftwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
          title: "[戶外婚紗] 林 & 陳 - 西子灣",
        },
      ],
    };
  },

  created() {},

  methods: {
    onIntersect(entries, observer) {
      if (entries[0].isIntersecting) this.aniPortfolio();
    },

    aniPortfolio() {
      this.portfolio.forEach((d, i) => {
        setTimeout(() => {
          this.show.push(true);
        }, 300 * (i + 2));
      });
    },
  },
};
</script>

<style lang="sass" scoped>
$color-orange-pink: #fb6b5e

#portfoliosection
  min-height: 400px

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

// 作品精選
.portfolioImg
  position: relative
  border-radius: 5px
  box-shadow: 0 0 5px rgba(black,0.3)
  transition: 0.3s
  overflow: hidden
  cursor: pointer
  aspect-ratio: 3 / 2 // 維持寬高比 此功能ios不支援...
  // 圖片放大1.5倍 水平垂直置中
  .img
    position: absolute
    left: 50%
    top: 50%
    width: 100%
    vertical-align: top // 圖片底部空白取消
    transition: 0.3s
    transform: translate(-50%,-50%) scale(1.5)
  // 滑入時陰影放大 整體往左上位移
  &:hover
    box-shadow: 2px 2px 10px rgba(black,0.3)
    transform: translate(-1px,-1px)
    // 滑入時圖片放大1.8倍
    .img
      transform: translate(-50%,-50%) scale(1.8)

.portfolioTitle
  color: rgba($color-orange-pink,0.9)
  font-size: 16px
  padding: 8px 4px

@supports not (aspect-ratio: 3 / 2)
  .portfolioImg
    .img
      position: unset
      width: 100%
      transition: 0.3s
      transform: scale(1.5)
      @media (min-width: 960px)
        height: 22vw
      @media (max-width: 960px)
        height: 33vw
      @media (max-width: 600px)
        height: 66vw
    &:hover
      .img
        transform: scale(1.8)

// 自定義淡入淡出動畫
.my-fade-slide-enter-active, .my-fade-slide-leave-active
  transition: all 1s

.my-fade-slide-enter, .my-fade-slide-leave-to
  transform: translateY(20%)
  opacity: 0
</style>
