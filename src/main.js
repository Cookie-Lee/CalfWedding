import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins";

// 圖片預加載方法 & 圖片清單
import { imgsPreloader } from "./config/imgPreloader";
import imgPreloaderList from "./config/imgPreloaderList";

Vue.config.productionTip = false;

(async () => {
  await imgsPreloader(imgPreloaderList);
  document.querySelector(".loadingBlock").style.display = "none";

  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
})();
