<template>
  <div class="attendance-container">
    <div class="attendance-time">{{ currentTime }}</div>
    <div class="attendance-status">
      <div class="circle"></div>
      <ul class="bubbles">
        <li v-for="(bubble, index) in bubbles" :key="index"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: this.getCurrentTime(),
      bubbles: Array(15).fill(null)
    };
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f4f4f4;
  overflow: hidden;
}

.attendance-time {
  position: absolute;
  width: 300px;
  top: 27%;
  text-align: center;
  font-size: 40px;
  z-index: 10;
  color: #333;
}

.attendance-container {
  position: relative;
  width: 300px;
  height: 400px;
  margin: auto;
}

.attendance-status {
  filter: contrast(10) hue-rotate(0);
  width: 300px;
  height: 400px;
  background-color: #fff;
  overflow: hidden;
  animation: hueRotate 10s infinite linear;
}

.circle {
  position: relative;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  filter: blur(8px);
}

.circle::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 200px;
  height: 200px;
  background-color: #4caf50;
  border-radius: 50%;
  animation: rotate 10s infinite linear;
}

.circle::before {
  content: "";
  position: absolute;
  width: 176px;
  height: 176px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #fff;
  z-index: 10;
}

.bubbles {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100px;
  height: 40px;
  transform: translate(-50%, 0);
  border-radius: 100px 100px 0 0;
  background-color: #4caf50;
  filter: blur(5px);
}

.bubbles li {
  position: absolute;
  border-radius: 50%;
  background: #4caf50;
}

.bubbles li:nth-child(1) {
  left: 20%;
  width: 20px;
  height: 20px;
  animation: moveToTop 5s ease-in-out infinite;
}

.bubbles li:nth-child(2) {
  left: 60%;
  width: 25px;
  height: 25px;
  animation: moveToTop 6s ease-in-out infinite;
}

/* Continue for all bubbles... */

@keyframes rotate {
  50% {
    border-radius: 50%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(-50%, -180px);
  }
}

@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}
</style>
