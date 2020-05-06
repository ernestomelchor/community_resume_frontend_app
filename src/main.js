import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://boiling-hollows-34522.herokuapp.com/api/students"
    : "https://boiling-hollows-34522.herokuapp.com/api/students";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
