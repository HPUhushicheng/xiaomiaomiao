<script setup lang="ts">
import { markRaw } from "vue";
import { randomGradient } from "@pureadmin/utils";
import { useRenderFlicker } from "@/components/ReFlicker";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Iphone from "@iconify-icons/ep/iphone";

defineOptions({
  name: "TimeLine"
});

const { lastBuildTime } = __APP_INFO__;
const activities = [
  {
    content: "支持圆点发光",
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker())
  },
  {
    content: "提供管理员与普通用户",
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: 0, background: "#67C23A" }))
  },
  {
    content: "课程提醒，学分查询及聊天功能有待开发，欢迎大家探讨交流可能方案",
    timestamp: lastBuildTime,
    icon: markRaw(
      useRenderFlicker({
        background: randomGradient({
          randomizeHue: true
        })
      })
    )
  },
  {
    content: "新增平滑过渡与悬停动画，统计曲线，日历组件未完成",
    timestamp: lastBuildTime
  },
  {
    content: "新增自定义天气,四六级,一言接口，更多想象空间留给用户反馈",
    timestamp: lastBuildTime,
    color: "#F56C6C"
  },
  {
    content: "初版ui板块设计完成,板块较少，后续会根据反馈考虑增加，尽可能在保障流畅的前提下增加体验感",
    timestamp: lastBuildTime,
    color: "transparent",
    icon: useRenderIcon(Iphone, {
      color: "#0bbd87"
    })
  }
];
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <p class="font-medium">时间线</p>
        <el-link
          class="mt-2"
          href="https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/timeline.vue"
          target="_blank"
        >
          代码位置 src/views/components/timeline.vue
        </el-link>
      </div>
    </template>
    <div class="flex">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :color="activity.color"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>

      <el-timeline class="pl-40">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :color="activity.color"
          :timestamp="activity.timestamp"
          placement="bottom"
        >
          <div class="message">
            vue-pure-admin 第{{ activities.length - index }}个版本发布啦
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<style scoped>
.message {
  position: relative;
  box-sizing: border-box;
  width: 200px;
  padding: 5px 12px;
  line-height: 18px;
  color: #fff;
  word-break: break-all;
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  border-radius: 6px;
}

.message::after {
  position: absolute;
  top: 8px;
  left: -10px;
  width: 0;
  height: 0;
  overflow: hidden;
  content: "";
  border-color: var(--el-color-primary) transparent transparent;
  border-style: solid dashed dashed;
  border-width: 10px;
}
</style>
