<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { TypeIt, type TypeItOptions } from "@/components/ReTypeit";
import noAccess from "@/assets/status/403.svg?component";
import user from "@/assets/user.jpg"; // 导入图片
const imageSrc = user; // 将导入的图片赋值给变量

// 定义响应式数据
const show = ref(true);
// 定义 TypeItOptions
const options: TypeItOptions = {
  strings: ["大学生电器开发部座位表"]
};

const seatingRowsA = ref([
  { name: "Person A1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person A2", image: "imageA2.png", link: "#", flipped: false },
  { name: "Person A1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person A2", image: "imageA2.png", link: "#", flipped: false },
  { name: "Person A1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person A2", image: "imageA2.png", link: "#", flipped: false },
  { name: "Person A1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person A2", image: "imageA2.png", link: "#", flipped: false }
]);
const seatingRowsB = ref([
  { name: "Person B1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person B2", image: "imageB2.png", link: "#", flipped: false },
  { name: "Person B1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person B2", image: "imageB2.png", link: "#", flipped: false },
  { name: "Person B1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person B2", image: "imageB2.png", link: "#", flipped: false },
  { name: "Person B1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person B2", image: "imageB2.png", link: "#", flipped: false }
]);
const seatingRowsC = ref([
  { name: "Person C1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person C2", image: "imageC2.png", link: "#", flipped: false },
  { name: "Person C1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person C2", image: "imageC2.png", link: "#", flipped: false },
  { name: "Person C1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person C2", image: "imageC2.png", link: "#", flipped: false },
  { name: "Person C1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person C2", image: "imageC2.png", link: "#", flipped: false }
]);
const seatingRowsD = ref([
  { name: "Person D1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person D2", image: "imageD2.png", link: "#", flipped: false },
  { name: "Person D1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person D2", image: "imageD2.png", link: "#", flipped: false },
  { name: "Person D1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person D2", image: "imageD2.png", link: "#", flipped: false },
  { name: "Person D1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person D2", image: "imageD2.png", link: "#", flipped: false }
]);
const seatingRowsE = ref([
  { name: "Person E1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person E2", image: "imageE2.png", link: "#", flipped: false },
  { name: "Person E1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person E2", image: "imageE2.png", link: "#", flipped: false },
  { name: "Person E1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person E2", image: "imageE2.png", link: "#", flipped: false },
  { name: "Person E1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person E2", image: "imageE2.png", link: "#", flipped: false }
]);
const seatingRowsF = ref([
  { name: "Person F1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person F2", image: "imageF2.png", link: "#", flipped: false },
  { name: "Person F1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person F2", image: "imageF2.png", link: "#", flipped: false },
  { name: "Person F1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person F2", image: "imageF2.png", link: "#", flipped: false },
  { name: "Person F1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person F2", image: "imageF2.png", link: "#", flipped: false }
]);
const seatingRowsG = ref([
  { name: "Person G1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person G2", image: "imageG2.png", link: "#", flipped: false },
  { name: "Person G1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person G2", image: "imageG2.png", link: "#", flipped: false },
  { name: "Person G1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person G2", image: "imageG2.png", link: "#", flipped: false },
  { name: "Person G1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person G2", image: "imageG2.png", link: "#", flipped: false }
]);


const seatingRowsH = ref([
  { name: "Person H1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person H2", image: "imageH2.png", link: "#", flipped: false },
  { name: "Person H1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person H2", image: "imageH2.png", link: "#", flipped: false },
  { name: "Person H1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person H2", image: "imageH2.png", link: "#", flipped: false }
]);

const seatingRowsI = ref([
  { name: "Person I1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person I2", image: "imageI2.png", link: "#", flipped: false },
  { name: "Person I1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person I2", image: "imageI2.png", link: "#", flipped: false }
]);
const seatingRowsJ = ref([
  { name: "Person J1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person J2", image: "imageJ2.png", link: "#", flipped: false },
  { name: "Person J1", image: "user.jpg", link: "#", flipped: false },
  { name: "Person J2", image: "imageJ2.png", link: "#", flipped: false }
]);

function flipCard(card) {
  card.flipped = true;
}
function unflipCard(card) {
  card.flipped = false;
}

// 使用 Vue Router
const router = useRouter();
</script>

<template>
  <el-card shadow="never">
    <div class="flex flex-wrap gap-2 my-2">
      <span>实验室座次表</span>
    </div>
    <!--打字机效果-->
    <div class="center-container">
      <div class="centered-content"><TypeIt :options="options" /></div>
    </div>
  </el-card>

  <el-card>
    <div class="seating-container">
      <!-- A组 -->
      <div class="row">
        <!-- A组标识 -->
        <div class="group-badge">A组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsA"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>

              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>

      <!-- B组 -->
      <div class="row">
        <!-- B组标识 -->
        <div class="group-badge">B组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsB"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>

      <!-- C组 -->
      <div class="row">
        <!-- C组标识 -->
        <div class="group-badge">C组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsC"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- D组 -->
      <div class="row">
        <!-- D组标识 -->
        <div class="group-badge">D组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsD"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- E组 -->
      <div class="row">
        <!-- d组标识 -->
        <div class="group-badge">E组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsE"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>

      <!-- F组 -->
      <div class="row">
        <!-- F组标识 -->
        <div class="group-badge">F组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsF"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- G组 -->
      <div class="row">
        <!-- G组标识 -->
        <div class="group-badge">G组<br />1417</div>
        <div
          v-for="(card, cardIndex) in seatingRowsG"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 1421组 -->
      <div class="row">
        <!-- 1421组标识 -->
        <div class="group-badge">1421</div>
        <div
          v-for="(card, cardIndex) in seatingRowsH"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 1603组 -->
      <div class="row">
        <!-- 1603组标识 -->
        <div class="group-badge">1603</div>
        <div
          v-for="(card, cardIndex) in seatingRowsI"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 1606组 -->
      <div class="row">
        <!-- 1606组标识 -->
        <div class="group-badge">1606</div>
        <div
          v-for="(card, cardIndex) in seatingRowsJ"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <img :src="imageSrc" alt="用户头像" />
            </div>
            <div class="card-back">
              <h3>{{ card.name }}</h3>
              <a :href="card.link" target="_blank">考勤时长</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
  <el-card>
    <div>
      <button>掘 金</button>
      <!--  换行是<br />  -->
      <button>牛 逼</button>
    </div>
  </el-card>
</template>

<style scoped>
.seating-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.card-container {
  perspective: 1000px;
  margin: 0 10px;
}

.card {
  width: 100px;
  height: 140px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #fff;
}

.card-back {
  background-color: #eee;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.group-badge {
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #555;
  margin: 0 20px;
  text-align: center;
  line-height: 1.2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}

html,
body {
  display: grid;
  height: 100%;
  overflow: hidden;
  place-items: center;
  background: #000;
}

button {
  position: relative;
  height: 60px;
  width: 200px;
  margin: 0 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  background: #111;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

button:first-child:hover {
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}

button:last-child:hover {
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

button:first-child::before,
button:last-child::before {
  content: "";
  position: absolute;
  background: inherit;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

button:first-child:hover:before,
button:last-child:hover:before {
  opacity: 1;
  z-index: -1;
}

button:hover {
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}
</style>
