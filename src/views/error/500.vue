<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue';
import noServer from "@/assets/status/500.svg?component";

defineOptions({
  name: "500"
});
const city = ref('焦作市'); // 默认城市
const weatherData = ref(null); // 存储天气数据
const tip = ref(''); // 存储提示信息
const isExpanded = ref(false); // 控制卡片展开和收缩

const fetchWeather = async () => {
  try {
    const response = await fetch('https://api.vvhan.com/api/weather');
    const data = await response.json();

    if (data.success) {
      weatherData.value = data.data; // 存储天气数据
      tip.value = data.tip; // 存储提示信息
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error('请求失败:', error);
  }
};

const toggleWeather = () => {
  if (!weatherData.value) {
    fetchWeather(); // 如果没有数据，则请求
  }
  isExpanded.value = !isExpanded.value; // 切换展开状态
};

const router = useRouter();
</script>

<!-- <template>
  <div class="flex justify-center items-center h-[640px]">
    <noServer />
    <div class="ml-12">
      <p
        v-motion
        class="font-medium text-4xl mb-4 dark:text-white"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80
          }
        }"
      >
        500
      </p>
      <p
        v-motion
        class="mb-4 text-gray-500"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 120
          }
        }"
      >
        抱歉，服务器出错了
      </p>
      <el-button
        v-motion
        type="primary"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 160
          }
        }"
        @click="router.push('/')"
      >
        返回首页
      </el-button>
    </div>
  </div>
</template> -->

<template>
  <div class="weather-card" @click="toggleWeather">
    <h2>{{ city }}</h2>
    <div v-if="isExpanded" class="weather-details">
      <p>
        <img src="./ice.svg" alt="天气类型" class="icon" />
        {{ weatherData.date }} - {{ weatherData.week }}
      </p>
      <p>
        <img src="./ice.svg" alt="温度" class="icon" />
        最低气温: {{ weatherData.low }} | 最高气温: {{ weatherData.high }}
      </p>
      <p>
        <img src="./ice.svg" alt="风向" class="icon" />
        风向: {{ weatherData.fengxiang }} | 风力: {{ weatherData.fengli }}
      </p>
      <p class="tip">{{ tip }}</p>
    </div>
    <div class="toggle-icon">
      <span v-if="isExpanded">▲</span>
      <span v-else>▼</span>
    </div>
  </div>
</template>



<style scoped>
.weather-card {
  background: linear-gradient(to bottom, #8dc388, #d3dcd3);
  color: white;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer; /* 鼠标悬停时显示为可点击 */
  transition: transform 0.2s; /* 添加过渡效果 */
  position: relative; /* 使图标绝对定位 */
  width:360px;
  height: 360px;
}

.weather-card:hover {
  transform: scale(1.05); /* 鼠标悬停时放大 */
}

.weather-details {
  margin-top: 10px; /* 数据与标题之间的间距 */
}

.icon {
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
  margin-right: 5px; /* 图标与文本之间的间距 */
}

.toggle-icon {
  position: absolute;
  right: 20px; /* 右侧位置 */
  top: 20px; /* 顶部位置 */
  font-size: 18px; /* 图标大小 */
}

.tip {
  margin-top: 10px; /* 提示信息与其他内容之间的间距 */
}
</style>