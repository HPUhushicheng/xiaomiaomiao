<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { ElButton, ElDatePicker } from 'element-plus'
import dayjs from 'dayjs'

const targetDate = ref('')
const remainingTime = ref(0)
const isRunning = ref(false)
let intervalId: number | null = null

const formatTime = (time: number): string => {
  const days = Math.floor(time / (24 * 3600))
  const hours = Math.floor((time % (24 * 3600)) / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60
  return `${days}天 ${hours.toString().padStart(2, '0')}小时:${minutes.toString().padStart(2, '0')}分钟:${seconds.toString().padStart(2, '0')}秒`
}

const isValidDate = computed(() => {
  return dayjs(targetDate.value).isValid() && dayjs(targetDate.value).isAfter(dayjs())
})

const startCountdown = () => {
  if (!isRunning.value && isValidDate.value) {
    isRunning.value = true
    updateRemainingTime()
    intervalId = setInterval(updateRemainingTime, 1000)
  }
}

const stopCountdown = () => {
  if (isRunning.value) {
    isRunning.value = false
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }
}

const resetCountdown = () => {
  stopCountdown()
  targetDate.value = ''
  remainingTime.value = 0
}

const updateRemainingTime = () => {
  const now = dayjs()
  const target = dayjs(targetDate.value)
  const diff = target.diff(now, 'second')
  
  if (diff > 0) {
    remainingTime.value = diff
  } else {
    remainingTime.value = 0
    stopCountdown()
  }
}

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="custom-countdown">
    <h3>自习倒计时</h3>
    <div class="countdown-input">
      <el-date-picker
        v-model="targetDate"
        type="datetime"
        placeholder="选择目标日期和时间"
        :disabled="isRunning"
        :disabledDate="(time) => dayjs(time).isBefore(dayjs(), 'day')"
      />
    </div>
    <div class="countdown-display">{{ formatTime(remainingTime) }}</div>
    <div class="countdown-controls">
      <el-button type="primary" @click="startCountdown" :disabled="isRunning || !isValidDate">开始</el-button>
      <el-button type="warning" @click="stopCountdown" :disabled="!isRunning">停止</el-button>
      <el-button type="info" @click="resetCountdown">重置</el-button>
    </div>
  </div>
</template>

<style scoped>
.custom-countdown {
  text-align: center;
  margin-bottom: 2rem;
}

.countdown-input {
  max-width: 300px;
  margin: 1rem auto;
}

.countdown-display {
  font-size: 1rem; /* 调整字体大小 */
  margin: 1rem 0;
}
.countdown-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>