<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
import * as echarts from 'echarts';

const showMessage = () => {
  ElMessage({
    message: '稍安毋燥，开发中😗',
    type: 'warning',
    duration: 2000 // 提示框显示时间，单位为毫秒
  })
}

const chartRef = ref(null);
const hourChartRef = ref(null);
const todayCourses = ref([
  { time: '09:00 - 10:00', name: '线性代数', location: '教室302' },
  { time: '10:00 - 11:00', name: '计算机科学', location: '教室204' },
  // 更多课程...
]);

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value);
    const option = {
      // 图表配置
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
          data: ['工作时间']
        },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
      toolbox: {
          feature: {
            saveAsImage: {}
        }
        },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '工作时间/h',
        data: [8, 8, 8, 9, 8, 3, 2],
        type: 'line',
        markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
        markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
      }]
    };
    myChart.setOption(option);
  }
  if (hourChartRef.value) {
    const hourChart = echarts.init(hourChartRef.value);
    const hourOption = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: Array.from({length: 24}, (_, i) => `${i}:00`)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '工作时长/h',
        type: 'bar',
        data: Array.from({length: 24}, () => Math.floor(Math.random() * 100)) // 示例数据
      }]
    };
    hourChart.setOption(hourOption);
  }
});
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
        <el-card class="dashboard-card1">一周工作时间折线图
          <div ref="chartRef" style="height: 460px;"></div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="dashboard-card2">今日课程
          <div class="today-courses">
            <ul>
              <li v-for="course in todayCourses" :key="course.name" class="course-item">
                <strong>{{ course.time }}</strong> - {{ course.name }} ({{ course.location }})
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第四行 -->
    <el-row :gutter="24" class="dashboard-row">
      <el-col :span="15">
        <el-card class="dashboard-card1">今天的工作时长细则
          <div ref="hourChartRef" style="height: 460px;"></div>
        </el-card>
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

.today-courses {
  padding: 20px;
  background: linear-gradient(to right, #9272b5 0%, #9eb1d1 100%);
  color: white; /* 白色文字 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
}
.course-item {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.5; /* 行高 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* 文字阴影 */
}

.course-item strong {
  font-weight: bold;
  color: #ffeb3b; /* 黄色强调时间 */
}

</style>