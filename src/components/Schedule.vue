<script setup>
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const classTypes = {
  engineering: { gradient: 'bg-gradient-to-r from-blue-400 to-indigo-600', text: 'text-white' },
  science: { gradient: 'bg-gradient-to-r from-red-400 to-pink-600', text: 'text-white' },
  it: { gradient: 'bg-gradient-to-r from-yellow-400 to-orange-600', text: 'text-gray-800' },
  management: { gradient: 'bg-gradient-to-r from-green-400 to-teal-600', text: 'text-white' },
}

const mockSchedule = [
  { day: '周一', startTime: '09:00', endTime: '11:00', name: '安全系统工程', location: '教室302', type: 'engineering' },
  { day: '周一', startTime: '11:00', endTime: '13:00', name: '燃烧学', location: '电气综合楼204', type: 'science' },
  { day: '周二', startTime: '15:00', endTime: '17:00', name: '信息检索与利用', location: '教室3208', type: 'it' },
  { day: '周三', startTime: '13:00', endTime: '15:00', name: '消防安全管理', location: '教室2407', type: 'management' },
]

const currentWeek = ref(0)

const getClassInfo = (day, time) => {
  return mockSchedule.find(c => c.day === day && c.startTime === time)
}

const getClassDuration = (classInfo) => {
  if (!classInfo) return 1
  const startIndex = timeSlots.indexOf(classInfo.startTime)
  const endIndex = timeSlots.indexOf(classInfo.endTime)
  return endIndex - startIndex
}

const isClassStart = (day, time) => {
  return mockSchedule.some(c => c.day === day && c.startTime === time)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
    <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div class="p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 class="text-3xl font-bold mb-4">艺术课程表</h1>
        <div class="flex justify-between items-center">
          <button @click="currentWeek--" class="p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft :size="24" />
          </button>
          <span class="text-xl font-semibold">第 {{ currentWeek + 1 }} 周</span>
          <button @click="currentWeek++" class="p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronRight :size="24" />
          </button>
        </div>
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="grid grid-cols-8 gap-4 min-w-[1000px]">
          <div class="sticky left-0 bg-white z-10">
            <div class="h-16"></div>
            <div v-for="time in timeSlots" :key="time" class="h-20 flex items-center justify-center text-gray-500 border-t border-gray-200">
              {{ time }}
            </div>
          </div>
          <div v-for="day in days" :key="day" class="space-y-0">
            <div class="h-16 flex items-center justify-center font-semibold text-gray-700 bg-gray-100 rounded-t-lg">
              {{ day }}
            </div>
            <div v-for="(time, index) in timeSlots" :key="`${day}-${time}`" class="h-20 border-t border-gray-200 relative">
              <div v-if="isClassStart(day, time)"
                   :class="[classTypes[getClassInfo(day, time).type].gradient, classTypes[getClassInfo(day, time).type].text]"
                   class="absolute inset-x-0 top-0 p-2 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:z-10"
                   :style="`height: ${getClassDuration(getClassInfo(day, time)) * 100}%`">
                <h3 class="font-bold text-sm">{{ getClassInfo(day, time).name }}</h3>
                <p class="text-xs mt-1 opacity-80">{{ getClassInfo(day, time).location }}</p>
                <p class="text-xs mt-1">{{ getClassInfo(day, time).startTime }} - {{ getClassInfo(day, time).endTime }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>