<template>
  <el-card class="box-card" :style="{ width: cardWidth, height: cardHeight }">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <span class="text-2xl" :class="iconClass">{{ icon }}</span>
    </div>
    <div class="flex items-end">
      <span class="text-4xl font-bold mr-2">{{ value }}</span>
      <span :class="percentageClass">{{ percentage }}</span>
    </div>
    <div class="mt-2">
      <el-progress :percentage="graphWidth" :color="graphColor" />
    </div>
  </el-card>
</template>

<script>
import { ElProgress } from 'element-plus'

export default {
  components: {
    ElProgress
  },
  props: {
    title: String,
    value: [Number, String],
    percentage: String,
    icon: String,
    graphWidth: Number,
    type: String,
    cardWidth: {
      type: String,
      default: '100%' // 默认宽度
    },
    cardHeight: {
      type: String,
      default: 'auto' // 默认高度
    }
  },
  computed: {
    iconClass() {
      return {
        'text-green-500': this.type === 'users',
        'text-blue-500': this.type === 'logins',
        'text-purple-500': this.type === 'requests',
      }
    },
    percentageClass() {
      return {
        'text-green-500': this.percentage.startsWith('+'),
        'text-red-500': this.percentage.startsWith('-'),
      }
    },
    graphColor() {
      return {
        'users': '#67C23A',
        'logins': '#409EFF',
        'requests': '#E6A23C',
      }[this.type]
    }
  },
}
</script>

<style scoped>
/* 添加任何需要的样式 */
</style>