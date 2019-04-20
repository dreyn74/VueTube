<template>
  <div class="video-list">
    <div v-for="video in videos" @click="chooseVideo(video)" :key="video.id" class="thumbnail">
      <div class="thumbnail-img">
        <img :src="video.thumbnail">
      </div>
      <div class="thumbnail-info">
        <h3>{{video.title}}</h3>
        <p>{{video.creator}}</p>
        <p class="thumbnail-views">{{video.views}} Views</p>
      </div>
    </div>
  </div>
</template>

<script>
let videos = [
  {
    id: 1,
    title: "18-core iMac Pro Review: Not a Trap!",
    thumbnail:
      "https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
    youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: "Dope Tech: Camera Robots!",
    thumbnail:
      "https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
    youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Let's Talk About Tesla Roadster 2020!",
    thumbnail:
      "https://i.ytimg.com/vi/ctx4YBEdOxo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
    youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: "Talking Tech with Neil deGrasse Tyson!",
    thumbnail:
      "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
    youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: "The Apple Ecosystem: Explained!",
    thumbnail:
      "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
    youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  }
];
export default {
  name: "VideoList",
  props: {
    method: {
      type: Function
    }
  },
  data() {
    return {
      videos,
      activeVideo: videos[0]
    };
  },
  methods: {
    chooseVideo: function(video) {
      // set video as active video
      this.activeVideo = video;
      //increase the video's views by one
      video.views += 1;
      // emit the event
      this.$emit("active-video", video);
    }
  },
  mounted() {
    this.$emit("active-video", this.activeVideo);
  }
};
</script>
