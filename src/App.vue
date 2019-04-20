<template>
  <div id="app">
    <img style="width:140px; margin:14px;" src="./assets/logo.png">
    <VideoPlayer :active="activeVideo"/>
    <VideoList @active-video="updateActive"/>
  </div>
</template>

<script>
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

export default {
  name: "App",
  components: {
    VideoList,
    VideoPlayer
  },
  data: function() {
    return {
      activeVideo: null
    };
  },
  methods: {
    updateActive(video) {
      this.activeVideo = video;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
