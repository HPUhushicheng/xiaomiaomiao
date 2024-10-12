<script setup lang="ts">
import { ref, watch } from 'vue';


const props = withDefaults(
  defineProps<{
    inputValue: string
  }>(),
  {
    inputValue: ''
  }
)


const emits = defineEmits(['update:inputValue'])
const input = ref<string>()

watch(() => props.inputValue, (newVal) => {
  input.value = newVal
  emits('update:inputValue', newVal) 
},{
  immediate: true
})
function inputFun() {
  emits('update:inputValue', input.value)
}
const textShow = ref(true)
</script>
<template>
  <div>
    <div v-if="textShow" @click="textShow = false">{{ input }}</div>
    <el-input v-else v-model="input" @input="inputFun"  @change="textShow = true"></el-input>
  </div>
</template>

<style scoped>

</style>