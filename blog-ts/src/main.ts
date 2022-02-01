import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入 element-ui
import ElementUI from "element-ui";
// 引入 css 样式
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
