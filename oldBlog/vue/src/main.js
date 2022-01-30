import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
