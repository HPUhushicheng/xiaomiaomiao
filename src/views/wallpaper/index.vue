<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";

defineOptions({
  name: "wallpaper"
});

const router = useRouter();

</script>

<template>
  <div id="main" class="masonry">
    <div class="container">
    <div class="item" style="height: 500px"><img src="../wallpaper/images/15.jpg" alt="Image 1"> </div>
    <div class="item" style="height: 390px"><img src="../wallpaper/images/2.jpg" alt="Image 2"> </div>
    <div class="item" style="height: 270px"><img src="../wallpaper/images/19.jpg" alt="Image 2"></div>
    <div class="item" style="height: 600px"><img src="../wallpaper/images/3.jpg" alt="Image 2"></div>
    <div class="item" style="height: 450px"><img src="../wallpaper/images/4.jpg" alt="Image 2"></div>
    <div class="item" style="height: 480px"><img src="../wallpaper/images/5.jpg" alt="Image 2"></div>
    <div class="item" style="height: 560px"><img src="../wallpaper/images/6.jpg" alt="Image 2"></div>
    <div class="item" style="height: 350px"><img src="../wallpaper/images/7.jpg" alt="Image 2"></div>
    <div class="item" style="height: 170px"><img src="../wallpaper/images/8.jpg" alt="Image 2"></div>
    <div class="item" style="height: 560px"><img src="../wallpaper/images/9.jpg" alt="Image 2"></div>
    <div class="item" style="height: 500px"><img src="../wallpaper/images/10.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/11.jpg" alt="Image 2"></div>
    <div class="item" style="height: 450px"><img src="../wallpaper/images/12.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/17.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/16.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/13.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/2.jpg" alt="Image 2"></div>
    <div class="item" style="height: 300px"><img src="../wallpaper/images/11.jpg" alt="Image 2"></div>
</div>
<div class="footer">
  <div class="footer-content">
    <div class="footer-item" >© 2024  All rights reserved.</div>  
  </div>
</div>
  </div>
</template>

<style>

.container {
    max-width: 1500px;
    margin: 20px auto;
    columns: 4;
    gap: 20px;
}
.footer-content {
    display: flex; /* 启用 flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100%; /* 设置高度为 100% */
}
.item {
    border-radius: 3px;
    background-color: #F0F2F5; /* 修改背景色为F0F2F5即可隐去item容器边框 */
    border: 1px solid #F0F2F5;  /* 修改背景色为F0F2F5即可隐去item容器边框 */
    color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
     /*防止元素内部分离而导致出现在两列*/
    break-inside: avoid;
    position: relative; /* 为了定位图片 */
    overflow: hidden; /* 隐藏超出部分 */
     border-radius: 30px; /* 容器圆角 */
}
.footer-item{
  width: 100%;
  height: 10px;
  text-align: center;
  font-size: 10px;
  color: #999;
  font-family: PingFangSC-Thin, sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;

}
.item img {
    width: 100%; /* 图片宽度填满容器 */
    height: 100%; /* 图片高度填满容器 */
    object-fit: cover; /* 保持图片比例 */
    border-radius: 25px; /* 图片圆角 */
    transition: transform 0.3s ease-in-out; /* 平滑过渡效果 */
}
.item img:hover {
    transform: scale(1.2); /* 放大图片 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
}

</style>






