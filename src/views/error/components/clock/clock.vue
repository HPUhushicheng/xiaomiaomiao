<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      date: ''
    };
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const cd = new Date();
      const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' +
                  this.zeroPadding(cd.getMinutes(), 2) + ':' +
                  this.zeroPadding(cd.getSeconds(), 2);
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' +
                  this.zeroPadding(cd.getMonth() + 1, 2) + '-' +
                  this.zeroPadding(cd.getDate(), 2) + ' ' +
                  week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
}
body {
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #063a4b;
  text-shadow: 0 0 20px rgb(1, 14, 23), 0 0 20px rgba(10, 175, 230, 0);
}
.time {
        letter-spacing: 0.05em;
        font-size: 36px;
        padding: 5px 0;
    }
.date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
.text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }

</style>