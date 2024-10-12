<script setup lang="ts">
import { useRouter } from "vue-router";

defineOptions({
  name: "zhuye"
});

const router = useRouter();
</script>

<template>
  <div class="wrapper">
    <div class="flexBox div1">
      <div class="card">
        <div class="container">
          <div class="cloud front">
            <span class="left-front"></span>
            <span class="right-front"></span>
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <span class="left-back"></span>
            <span class="right-back"></span>
          </div>
        </div>

        <div class="card-header">
          <span>Messadine, Susah<br />Tunisia</span>
          <span>March 13</span>
        </div>

        <span class="temp">23°</span>

        <div class="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </div>
    <div class="flexBox div2"><div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>Messadine, Susah<br>Tunisia</span>
    <span>March 13</span>
  </div>

  <span class="temp">23°</span>

  <div class="temp-scale">
    <span>Celcius</span>
  </div>
</div></div>
    <div class="flexBox div3">
<div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>Messadine, Susah<br>Tunisia</span>
    <span>March 13</span>
  </div>

  <span class="temp">23°</span>

  <div class="temp-scale">
    <span>Celcius</span>
  </div>
</div></div>
    <div class="flexBox div4">div4</div>
    <div class="flexBox div4">div4</div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  place-content: stretch flex-start;
  align-items: stretch;
}

.flexBox {
  border: 1px solid #F0F2F5;
}

.div1 {
  margin: 5px;
  width: 430px;
  height: 500px;
  order: 0;
  align-self: auto;
  flex-basis: 0px;
  flex: 0 1 auto;
  background: #F0F2F5;
}


.card {
  width: 300px;
  height: 200px;
  left: 20px; 
  position: relative;
  padding: 25px;
  background:
    radial-gradient(178.94% 106.41% at 26.42% 106.41%,
      #fff7b1 0%,
      rgba(255, 255, 255, 0) 71.88%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ,
    #ffffff;
  box-shadow:
    0px 155px 62px rgba(0, 0, 0, 0.01),
    0px 87px 52px rgba(0, 0, 0, 0.05),
    0px 39px 39px rgba(0, 0, 0, 0.09),
    0px 10px 21px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

.container {
  width: 250px;
  height: 250px;
  position: absolute;
  right: -55px;
  top: -90px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}

.cloud {
  width: 250px;
}

.front {
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
  animation: clouds 8s infinite;
  animation-timing-function: ease-in-out;
}

.back {
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: clouds 12s infinite;
  animation-timing-function: ease-in-out;
}

.right-front {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
}

.left-front {
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.right-back {
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -20px;
  z-index: 5;
}

.left-back {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.sun {
  width: 120px;
  height: 120px;
  background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
  background: linear-gradient(to right, #fcbb04, #fffc00);
  border-radius: 60px;
  display: inline;
  position: absolute;
}

.sunshine {
  animation: sunshines 2s infinite;
}

@keyframes sunshines {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes clouds {
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header span:first-child {
  word-break: break-all;
  font-weight: 800;
  font-size: 15px;
  line-height: 135%;
  color: rgba(87, 77, 51, 0.66);
}

.card-header span:last-child {
  font-weight: 700;
  font-size: 15px;
  line-height: 135%;
  color: rgba(87, 77, 51, 0.33);
}

.temp {
  position: absolute;
  left: 25px;
  bottom: 12px;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  color: rgba(87, 77, 51, 1);
}

.temp-scale {
  width: 80px;
  height: 36px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 9px;
}

.temp-scale span {
  font-weight: 700;
  font-size: 13px;
  line-height: 134.49%;
  color: rgba(87, 77, 51, 0.66);
}

.div2 {
  margin: 5px;
  width: 430px;
  height: 146px;
  order: 0;
  align-self: auto;
  flex-basis: 0px;
  flex: 0 1 auto;
  background: #F0F2F5;
}

.div3 {
  margin: 5px;
  width: 430px;
  height: 146px;
  order: 0;
  align-self: auto;
  flex-basis: 0px;
  flex: 0 1 auto;
  background: #F0F2F5;
}

.div4 {
  margin: 5px;
  width: 430px;
  height: 146px;
  order: 0;
  align-self: auto;
  flex-basis: 0px;
  flex: 0 1 auto;
  background: #F0F2F5;
}
</style>