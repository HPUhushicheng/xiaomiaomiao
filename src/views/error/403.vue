<script setup lang="ts">
import { useRouter } from "vue-router";
import noAccess from "@/assets/status/403.svg?component";

defineOptions({
  name: "403"
});

const router = useRouter();
</script>


<template>
  <div class="app-container">
  <div class="card-wrapper">
  <el-card class="card-container">
    <div slot="header">卡片名称</div>
    <p>卡片内容</p>
  </el-card>
  <el-card class="card-container2">
    <div slot="header2">卡片名称</div>
    <p>卡片内容</p>
  </el-card>
  <el-card class="card-container3">
    <div slot="header3">卡片名称</div>
    <p>卡片内容</p>
  </el-card>
  </div>
  <div class="card-wrapper2">
    <el-card class="card-container4">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  </div>
  <div class="card-wrapper2">
    <el-card class="card-container4">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  <el-card class="card-container5">
    <p>卡片</p>
  </el-card>
  </div>
  
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(to bottom, #8dc388, #5fa99f, #2e58b4);
  color: white;
  text-align: center;
  padding: 50px;
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(500px); /* 增加毛玻璃效果 */
  width: 100%; /* 确保父容器宽度为 100% */
}
.card-wrapper {

  display: flex; /* 使用 Flexbox 布局 */
  /*justify-content: space-between;  在卡片之间均匀分配空间  */
  align-items: flex-start; /* 垂直对齐方式 */
  width: 100%; /* 确保父容器宽度为 100% */

}

.card-container {
  background: linear-gradient(to bottom, #8dc388, #5fa99f, #2e58b4);
  color: white;
  text-align: center;
  padding: 10px; /* 增加内边距 */
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(10px); /* 增加毛玻璃效果 */
  /* 控制长宽 */
  width: 34%; /* 设置宽度 */
  height: 200px; /* 设置高度 */
  /* margin: 0px 50px; 上下间距为 0，左右间距为 10px */
  margin-right: 50px; /* 设置卡片之间的右间距 */
  margin-left: 0; /* 确保没有左边距 */
}

.card-container2 {
  background: linear-gradient(to bottom, #8dc388, #5fa99f, #2e58b4);
  color: white;
  text-align: center;
  padding: 10px; /* 增加内边距 */
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(10px); /* 增加毛玻璃效果 */
  /* 控制长宽 */
  width: 200px; /* 设置宽度 */
  height: 200px; /* 设置高度 */
  margin-right:50px;
}

.card-container3 {
  background: linear-gradient(to bottom, #8dc388, #5fa99f, #2e58b4);
  color: white;
  text-align: center;
  padding: 10px; /* 增加内边距 */
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(10px); /* 增加毛玻璃效果 */
  /* 控制长宽 */
  width: 200px; /* 设置宽度 */
  height: 200px; /* 设置高度 */
}
/* 移除最后一个卡片的右间距 */
.card-container3:last-child {
  margin-right: 0; /* 最后一个卡片不需要右间距 */
}

.card-wrapper2 {
  display: flex; /* 使用 Flexbox 布局 */
  /*justify-content: space-between;  在卡片之间均匀分配空间  */
  align-items: flex-start; /* 垂直对齐方式 */
  width: 100%; /* 确保父容器宽度为 100% */
  margin-top:40px; /* 设置与上面的卡片的间距*/

}
.card-container4 {
  background: linear-gradient(to bottom, #867cc2, #c5e2de, #d4de96);
  color: white;
  text-align: center;
  padding: 0px; /* 增加内边距 */
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(10px); /* 增加毛玻璃效果 */
  /* 控制长宽 */
  width: 70px; /* 设置宽度 */
  height: 70px; /* 设置高度 */
  margin-right:40px;

}

.card-container5 {
  background: linear-gradient(to bottom, #867cc2, #c5e2de, #d4de96);
  color: white;
  text-align: center;
  padding: 0px; /* 增加内边距 */
  border-radius: 15px; /* 增加圆角效果 */
  backdrop-filter: blur(10px); /* 增加毛玻璃效果 */
  /* 控制长宽 */
  width: 70px; /* 设置宽度 */
  height: 70px; /* 设置高度 */
  margin-right:40px;
}
/* 移除最后一个卡片的右间距 */
.card-container5:last-child {
  margin-right: 0; /* 最后一个卡片不需要右间距 */
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.download-button {
  background-color: #007bff,;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px; /* 增加圆角效果 */
}

.main-content {
  margin-top: 50px;
}

.get-helper-button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px; /* 增加圆角效果 */
  font-size: 18px;
}

</style>

