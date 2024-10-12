<script setup lang="ts">
import { ElMessage } from 'element-plus'

const showMessage = () => {
  ElMessage({
    message: '稍安毋燥，开发中😗',
    type: 'warning',
    duration: 2000 // 提示框显示时间，单位为毫秒
  })
}
</script>

<template>
  <div>
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="24">
        <el-card class="dashboard-card3"></el-card>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="3">
        <el-card class="dashboard-card" @click="showMessage">元器件租赁</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">活跃用户</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">费用报销</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">问题求助</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">在线时长</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">任务分工</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">比赛组队</el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="dashboard-card">满意度评价</el-card>
      </el-col>
    </el-row>
  
        <el-row :gutter="24" class="dashboard-row">
      <el-col :span="5">
        <el-card class="dashboard-card" @click="showMessage">座位分配</el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="dashboard-card">培训流程</el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="dashboard-card">个人风采</el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="dashboard-card">实验室卫生/抬水</el-card>
      </el-col>
           <el-col :span="4">
        <el-card class="dashboard-card">经验问答分享区</el-card>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="15">
        <el-card class="dashboard-card1">分析概览</el-card>
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
  margin-top: 20px; /* 设置行间距 */
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center; 
  cursor: pointer; /* 鼠标悬停时显示手型 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 60px; /* 设置每个板块的高度 */
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