<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { TypeIt, type TypeItOptions } from "@/components/ReTypeit";
import noAccess from "@/assets/status/403.svg?component";
import user from "@/assets/user.jpg"; // 导入图片
const imageSrc = user; // 将导入的图片赋值给变量
// 定义组件名称
const name = "test";

// 定义 TypeItOptions
const options: TypeItOptions = {
  strings: ["重生之我在大学生电器开发部——“筑气期” 🤣🤣🤣 "]
};

// 定义响应式数据
const show = ref(true);

const seatingRows = ref([
  [
    {
      name: "Person A",
      xuehao: "3211547520478841",
      image: "user.jpg",
      time: "#",
      flipped: false
    },
    {
      name: "Person B",
      xuehao: "3211547520478841",
      image: "car.png",
      time: "#",
      flipped: false
    },
    {
      name: "Person C",
      xuehao: "3211547520478841",
      image: "imageC1.png",
      time: "#",
      flipped: false
    },
    {
      name: "Person D",
      xuehao: "3211547520478841",
      image: "imageD1.png",
      time: "#",
      flipped: false
    }
    // 其他卡片
  ],
  [
    {
      name: "Person C",
      xuehao: "3211547520478841",
      image: "imageC1.png",
      time: "#",
      flipped: false
    },
    {
      name: "Person D",
      xuehao: "3211547520478841",
      image: "imageD1.png",
      time: "#",
      flipped: false
    },
    {
      name: "Person C",
      xuehao: "3211547520478841",
      image: "imageC1.png",
      time: "#",
      flipped: false
    },
    {
      name: "Person D",
      xuehao: "3211547520478841",
      image: "imageD1.png",
      time: "#",
      flipped: false
    }
    // 其他卡片
  ]
]);

// 定义方法
function flipCard(card) {
  card.flipped = true;
}
function unflipCard(card) {
  card.flipped = false;
}

// 使用 Vue Router
const router = useRouter();
</script>

<!-- <template>
  <div>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="测试1"> 
        <div v-show="show" class="transition-box">测试1</div>
      </transition>

      <transition name="测试2">
      <div v-show="show" class="transition-box">测试2</div>
      </transition>

      <transition name="测试1"> 
        <div v-show="show" class="transition-box">测试1</div>
      </transition>

      <transition name="测试2">
        <div v-show="show" class="transition-box">测试2</div>
      </transition>
    </div>
  </div>
</template>


<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #25c425;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style> -->

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
  <el-card shadow="never">
    <div class="seating-container">
      <div v-for="(row, rowIndex) in seatingRows" :key="rowIndex" class="row">
        <div
          v-for="(card, cardIndex) in row"
          :key="cardIndex"
          class="card-container"
          @mouseenter="flipCard(card)"
          @mouseleave="unflipCard(card)"
        >
          <div class="card" :class="{ flipped: card.flipped }">
            <div class="card-front">
              <!-- <img :src="card.image" alt="Avatar"> -->
              <img :src="imageSrc" alt="image" />
            </div>
            <div class="card-back">
              <h4>{{ card.name }}</h4>
              <br />{{ card.xuehao }}
              <h6><a :href="card.time" target="_blank">考勤明细 </a></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 50px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.seating-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  margin-bottom: 40px; //照片框上下距离
}

.card-container {
  perspective: 1000px;
  margin: 0 50px; //照片框左右边距
}

.card {
  width: 100px;
  height: 130px; //照片框长宽
  transition: transform 0.6s; //卡片翻转时间
  transform-style: preserve-3d;
  position: relative;
}

.card.flipped {
  transform: rotateY(180deg); //绕y轴翻转角度，180-->半平面，，360-->一圈
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
  background-color: #e7e9e5;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
