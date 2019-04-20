// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Original source code developed by Alex Brown
// https://medium.com/techtrument/build-a-video-player-like-youtube-in-vuejs-webpack-and-flexbox-b51ef9bede0b
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
