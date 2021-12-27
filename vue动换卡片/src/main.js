import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

// 设置默认前缀
axios.defaults.baseURL = "http://127.0.0.1:3000";
//全局挂载axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
