<template lang="pug">
  base-section(id="recommendsection" space="36")
    v-container
      //- 標題
      .heading.mb-4
        .chtitle {{ title }}
        .engtitle {{ engTitle }}
      v-row(no-gutters)
        v-col(cols="12" md="6")
          v-timeline(align-top dense)
            v-timeline-item(v-for="(item,i) in recommend_l" :key="i")
              template(v-slot:icon)
                v-avatar
                  img(:src="`https://picsum.photos/200/200?id=1${i}`")
              v-card.myTimeline
                .myTitle {{ item.title }}
                .myContent  {{ item.content }}
        v-col(cols="12" md="6")
          v-timeline(align-top dense)
            v-timeline-item(v-for="(item,i) in recommend_r" :key="i")
              template(v-slot:icon)
                v-avatar
                  img(:src="`https://picsum.photos/200/200?id=2${i}`")
              v-card.myTimeline
                .myTitle {{ item.title }}
                .myContent  {{ item.content }}
</template>
<script>
export default {
  name: "SectionRecommend",

  data() {
    return {
      engTitle: "RECOMMEND",
      title: "好評推薦",
      recommend: [
        {
          title: "[婚攝] Eric & Janie - 真愛庭園",
          content:
            "看到婚紗的成品當下是滿滿的感動與幸福!! Vincent的專業,細膩及親切是無庸置疑的,那自然,溫暖透過每一張照片真誠地傳遞出來,謝謝Vincent幫我們留下美好的回憶,未來有機會一定要再請焱木攝影記錄下生命中的珍貴的時刻!!",
        },
        {
          title: "[戶外婚紗] 子雲 & 侑熙 - 淡水河畔",
          content:
            "抓周和家庭寫真是個很棒的決定！當初在網路上看到作品集就非常喜歡他自然溫暖的風格，拿到作品集之後果然覺得很值得很開心。一歲的小孩其實很難控制，拍照當天孩子也有些怕生，但Vincent卻依然有辦法捕捉到自然的瞬間和表情！謝謝Vincent幫我們家留下美好的紀錄！下次有機會還想請焱木攝影幫我們紀錄生活：）超棒～",
        },
        {
          title: "[戶外婚紗] Leo & Tina - 向日葵農場",
          content:
            "攝影師非常用心，不管在什麼狀態都能拍出讓人驚艷的照片，交給攝影師不用擔心，也非常的注意婚禮流程，也很細心跟你談論婚禮細節跟注意事項，非常謝謝攝影師！真心推薦！",
        },
        {
          title: "[室內婚紗] 德斌 & 家蕓 - 婚紗攝影",
          content:
            "婚禮前經由書書的推薦，讓我遇到了很狂的團隊！從婚禮前的溝通，超級無敵迅速！完全正中紅心～而且完全記得我心中的所有小要求⋯",
        },
        {
          title: "[戶外婚紗] Denial & Jessica - 台中",
          content:
            "每一張出來的照片都很有靈魂跟溫度！！觀察力很強，能隨時捕捉每個人細微的面部表情～看照片回味都能想起當天的感動與美好❤️",
        },
        {
          title: "[戶外婚紗] 林 & 陳 - 西子灣",
          content:
            "很慶幸，在婚前，因為新秘推薦。每一張照片都充滿著溫度跟故事，在婚禮現場的新娘，大部分都不知道外面的世界如何，不只拍了外面的一靜一動，更把所有人的表情、動作都抓的很到位。讓人看著照片，就可以想到當天的情景，並且很感動，把照片拍得像錄影的故事畫面，真的很厲害。敬業的態度，不管是習俗流程或者是拍照時的帶氣氛，全部都難不倒他。真心推薦，謝謝你們給我們這麼棒的婚禮照片。辛苦你們了。",
        },
        {
          title: "[室內婚紗] 德斌 & 家蕓 - 婚紗攝影",
          content:
            "很早之前就已決定好在國內拍婚紗，當時對拍照沒特別的想法，可能就是讓攝影師帶動作，然後中部幾個熱門景點拍一拍就好。後來在版上看到版友分享的關西婚紗照片，櫻花很美，照片拍的更美",
        },
        {
          title: "[戶外婚紗] Denial & Jessica - 台中",
          content:
            "在婚期出來之前已經在板上潛水一段時間，早就在婚攝名單之中(並且是第一名哈哈哈哈哈)，他的個人網頁我也瀏覽又瀏覽，並且落淚了好幾回XDDD 沒辦法真的就是很感動~",
        },
        {
          title: "[戶外婚紗] 林 & 陳 - 西子灣",
          content:
            "今天要來推薦我的神手婚攝，看照片之前先來說說有多麼多麼的令人推薦。超級宇宙無敵認真，純宴客交付張數800多張，我的新秘助理一看到就說她每看一次就傷心一次，因為認真到助理想到她婚宴混混的婚攝就傷心XD",
        },
      ],
    };
  },

  computed: {
    recommend_l() {
      return this.recommend.filter((d, i) => {
        return i < this.recommend.length / 2;
      });
    },
    recommend_r() {
      return this.recommend.filter((d, i) => {
        return i >= this.recommend.length / 2;
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

.myTimeline
  padding: 8px 12px
  margin-top: -12px
  &::before
    top: calc(0% + 10px + 12px) !important
  &::after
    top: calc(0% + 10px + 10px) !important

  .myTitle
    color: rgba($color-orange-pink,0.9)
    font-weight: 500
    font-size: 15px

  .myContent
    margin-top: 4px
    color: rgba(black,0.6)
    font-weight: 500
    font-size: 13px

.theme--light.v-timeline:before
  background: transparent
</style>
