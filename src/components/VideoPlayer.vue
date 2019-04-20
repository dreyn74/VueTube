<template>
  <div>
    <div class="video-player">
      <div class="video-container">
        <iframe
          width="640"
          height="360"
          :src="this.activeVideo.youtubeURL"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <h3>{{this.activeVideo.title}}</h3>
        <div class="row">
          <p>{{this.activeVideo.views}} views</p>
          <p>
            {{this.activeVideo.likes}}
            <button @click="addLike">Like</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    active: {
      type: Object
    }
  },
  data: function() {
    return {
      activeVideo: {}
    };
  },
  methods: {
    addLike: function() {
      this.activeVideo.likes += 1;
    }
  },
  watch: {
    active: function() {
      this.activeVideo = this.active;
    }
  }
};
</script>
