<template lang="pug">
  base-section(id="contactsection" space="36")
    v-container
      v-row
        v-col(cols="12" md="12")
          .engTitle {{ engTitle }}
          .chtTitle {{ chtTitle }}
        v-col(cols="12" md="4")
          .chtName {{ chtName }}
          .engName {{ engName }}
          v-row(no-gutters).mt-2
            v-col(cols="12")
              span.myTitle MAIL
              span.myContent {{ mail }}
            v-col(cols="12")
              span.myTitle LINE
              span.myContent {{ line }}
            v-col(cols="12")
              span.myTitle MOBILE
              span.myContent {{ mobile }}
        v-col(cols="12" md="8")
          .content {{ content1 }}
          .content.mt-3 {{ content2 }}
</template>

<script>
export default {
  name: "SectionContact",

  data() {
    return {
      engTitle: "CONTACT",
      chtTitle: "聯絡我們",
      content1:
        "此站為鋼鐵小象網頁設計工作室開發之婚紗攝影公司Demo站台，本網站架構網頁設計為本公司版權所有，除法律規定或特別指明外，非經本公司書面授權同意，不得以任何形式轉載、修改、傳輸、再製、散布、顯示、出版或是傳播。",
      content2:
        "有任何網頁開發需求歡迎與我們聯繫，我們將為您提供最優質的服務。",
      chtName: "鋼鐵小象網頁設計工作室",
      engName: "SteelCalf Web Design",
      mail: "steelcalf@gmail.com",
      line: "@steelcalf",
      mobile: "0917980268",
    };
  },
};
</script>

<style lang="sass">

#contactsection
  background-color: #212121
  color: white

.engTitle
  font-weight: bold
  letter-spacing: 0.2rem
  font-size: 14px

.chtTitle
  font-weight: bold
  letter-spacing: 0.3rem
  font-size: 18px

.chtName
  letter-spacing: 0.1rem
  font-size: 14px

.engName
  letter-spacing: 0.1rem
  font-size: 12px

.myTitle
  margin-right: 8px
  font-size: 12px

.myContent
  font-size: 16px
</style>
