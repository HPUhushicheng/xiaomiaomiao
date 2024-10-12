<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { ElIcon } from "element-plus";
import { User, QuestionFilled, Check, Star } from "@element-plus/icons-vue";
import ReCol from "@/components/ReCol";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { useRenderFlicker } from "@/components/ReFlicker";
import Segmented, { type OptionsType } from "@/components/ReSegmented";
import axios from "axios";
import clock from './components/clock/clock.vue';
import TodoAPP from '@/components/TodoAPP.vue'
import DataCard from '@/components/DataCard.vue'
import buju from '@/components/buju.vue'
defineOptions({
  name: "600"
});

const router = useRouter();
const userCount = ref(0);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:666/list/all");
    userCount.value = response.data.length;
  } catch (error) {
    console.error("获取数据失败:", error);
  }
});

function goToWallpaper() {
  router.push('/wallpaper');
}
function goToTianqi() {
  router.push('/error/500')
}

</script>

<template>
  <div>
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="24">
        <el-card class="dashboard-card3"><div class="tixing">&nbsp;&nbsp;欢迎大家使用大学生电器开发部考勤系统！ &nbsp;&nbsp;&nbsp;业精于勤荒于嬉 行成于思毁于随!</div>
        <div class="clock"> <clock /></div></el-card>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="6">
        <el-card class="dashboard-card">
          <el-icon class="card-icon"><User /></el-icon>
        <div class="card-number">{{ userCount }}</div><div class="card-content">注册用户人数</div></el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card">活跃用户</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card">解决数量</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card">用户满意度</el-card>
      </el-col>
    </el-row>
  
        <el-row :gutter="24" class="dashboard-row">
      <el-col :span="6">
        <el-card class="dashboard-card">提问数量</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card">活跃用户</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card" @click="goToTianqi">天气预报</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="dashboard-card" @click="goToWallpaper">图库</el-card>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="15">
        <el-card class="dashboard-card1">分析概览<div><TodoAPP/></div></el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="dashboard-card2">解决概率</el-card>
      </el-col>
    </el-row>

    <!-- 第四行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="15">
        <el-card class="dashboard-card1">分析概览</el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="dashboard-card2">更新动态</el-card>
      </el-col>
    </el-row>


    <!-- 第五行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="24">
        <el-card class="dashboard-card2">最新动态</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.dashboard-row + .dashboard-row {
  margin-top:20px; /* 设置行间距 */
}

.dashboard-card {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 150px; /* 设置每个板块的高度 */
  border-radius: 10px; /* 设置圆角效果 */
  background-image: linear-gradient(to right, #a6e2b9 0%, #eceab7 100%);
  transition: transform 0.3s ease-in-out; /* 平滑过渡效果 */
}
.card-icon{
  font-size:20px;
  margin-right:10px;
  position: relative; /* 设置相对定位 */
  left:200px;
}

.card-content{
  margin:0 0 10px 0;
  position: relative; /* 设置相对定位 */
  bottom:50px;
}
.card-number {
  margin:0;
  position: relative; /* 设置相对定位 */
  top: 50px;
  left:10px;
}
.dashboard-card:hover{
  transform: scale(1.1); /* 放大图片 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
.dashboard-card1 {
  height: 500px; /* 设置个别板块的高度 */
  border-radius: 10px; /* 设置圆角效果 */
  transition: transform 0.3s ease-in-out; /* 平滑过渡效果 */
}
.dashboard-card1:hover{
  transform: scale(0.9); /* 放大图片 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
.dashboard-card2 {
  height: 500px; /* 设置个别板块的高度 */
  border-radius: 10px; /* 设置圆角效果 */
  transition: transform 0.3s ease-in-out; /* 平滑过渡效果 */
}
.dashboard-card2:hover{
  transform: scale(0.9); /* 放大图片 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
.dashboard-card3{
  height:130px;
  border-radius: 10px; 
  background-image: linear-gradient(to right, #a6e2b9 0%, #eceab7 100%);
  transition: transform 0.3s ease-in-out; /* 平滑过渡效果 */
}
.clock{
  position: relative; /* 设置相对定位 */
  top:20px;
  left:480px;
}
.tixing{
  position: relative; /* 设置相对定位 */
  left:70px;
  top:35px;
}



</style>