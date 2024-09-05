<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { TypeIt, type TypeItOptions } from "@/components/ReTypeit";

defineOptions({
  name: "Typeit"
});

const options: TypeItOptions = {
  strings: ["欢迎来到大学生电器开发部！大家好嗨", "test2", "test3"]
};
const posX = 960;
const posY = 100;

const formJson = reactive({
  widgetList: [
    {
      key: 97015,
      type: "card",
      category: "container",
      icon: "card",
      widgetList: [],
      options: {
        name: "card93075",
        label: "card93075",
        hidden: false,
        headerHidden: false,
        folded: false,
        showFold: true,
        cardWidth: "30%",
        shadow: "never",
        customClass: []
      },
      id: "card93075"
    }
  ],
  formConfig: {
    modelName: "formData",
    refName: "vForm",
    rulesName: "rules",
    labelWidth: 80,
    labelPosition: "left",
    size: "",
    labelAlign: "label-left-align",
    cssCode: "",
    customClass: [],
    functions: "",
    layoutType: "PC",
    jsonVersion: 3,
    dataSources: [],
    onFormCreated: "",
    onFormMounted: "",
    onFormDataChange: "",
    onFormValidate: ""
  }
});
const formData = reactive({});
const optionData = reactive({});
const vFormRef = ref(null);

const submitForm = () => {
  vFormRef.value
    .getFormData()
    .then(formData => {
      // Form Validation OK
      alert(JSON.stringify(formData));
    })
    .catch(error => {
      // Form Validation failed
      ElMessage.error(error);
    });
};
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <p class="font-medium">打字机组件</p>
        <el-link
          class="mt-2"
          href="https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/typeit.vue"
          target="_blank"
        >
          代码位置 src/views/able/typeit.vue
        </el-link>
      </div>

      <div class="center-container">
        <div class="centered-content"><TypeIt :options="options" /></div>
      </div>

      <div
        :style="{ position: 'absolute', left: posX + 'px', top: posY + 'px' }"
      >
        Hello World!
      </div>

      <div>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </div>
    </template>
  </el-card>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500%; /* 或者指定一个具体的高度 */
}

.centered-content {
  /* 这里可以添加更多的样式 */
}
</style>
