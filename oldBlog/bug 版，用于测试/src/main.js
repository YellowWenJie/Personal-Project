import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = "/api/blog";
new Vue({
  // 全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  axios,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
