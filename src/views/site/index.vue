<script setup lang="ts">
import { computed } from 'vue';
import Input from '@/components/Input/Input.vue'
import { useRouter } from 'vue-router';
import { useTableListStore } from '@/store/index.ts'
import { storeToRefs } from 'pinia';
const tableListStore = useTableListStore();

const { tableList } = storeToRefs(tableListStore);

const allCount = computed(()=>{
  let result = 0
  tableList.value.forEach(x=>{
    x.left.forEach(y=>{
      if(y.isLocation){
        result++
      }
    })
    x.right.forEach(y=>{
      y.list?.forEach(z=>{
        if(z.isLocation){
          result++
        }
      })
    })
  })
  return result
})

const didNotUse = computed(()=>{
  let result = 0;
  tableList.value.forEach(x=>{
    x.left.forEach(y=>{
      if(y.name == '办公桌' || y.name === ''){
        result++
      }
    })
    x.right.forEach(y=>{
      y.list?.forEach(z=>{
        if(z.name == '办公桌' || y.name === ''){
          result++
        }
      })
    })
  })

  return result
})
const router = useRouter()
function outlogin(){
  router.replace({
    path: '/login'
  })
}

function addOffice(){
  tableList.value.push({
    id:'1',
    name: '窗户',
    left: [
      {
        id: '11',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '12',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '13',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '14',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '15',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '16',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '17',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '18',
        name: '办公桌',
        isLocation: true
      }
    ],
    right: [{
      id:'21',
      name: ''
    },{
      id:'22',
      name: '',
      list: [{
          id:'21',
          name: '柜子',
          widht: 1,
          height: 2,
          isLocation: true
        }]
    }]
  })
}
</script>
<template>
  <div>
    <el-card class="card">
      <h3>总共：{{ allCount }} 个工位</h3>
      <h3>还剩：{{ didNotUse }} 个工位没有使用</h3>
      <el-button @click="outlogin">退出登录</el-button>
    </el-card>
    <el-card class="card">
      <h4>一楼</h4>
      <div class="card-flex conference-room">
    
      <div v-for="(item,index) in tableList" :key="index" class="card-body">
        <div class="card-body-title">
          {{ item.name }}
          
        </div>
        <div class="card-body-content">
          <div class="card-body-left">
            <div class="card-body-left__item flex-center-content" 
            :style="{
                backgroundColor: itemLeft.name === '办公桌' ?'#ccc':''
              }" 
              v-for="(itemLeft, index) in item.left" 
              :key="index"
            >
          
              <Input v-model:input-value="itemLeft.name"></Input>
            </div>
          </div>
          <div class="card-body-right">
            <div 
              class="card-body-right__item"  
              v-for="(itemRight, index) in item.right" 
              :key="index"
            >
              <div
                class="flex-center-content"
                :style="{
                  backgroundColor: indexRight.name  ?'rgb(241, 205, 177)':'',
                  width: '100%',
                  height: indexRight.height * 50 + '%'
                }" 
                v-for="(indexRight, index) in itemRight.list"
                :key="index"
              >
              <Input v-model:input-value="indexRight.name"></Input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-button @click="addOffice">添加办公室</el-button>
    </div>
    
    </el-card>

  </div>
</template>
<style scoped>
.card{
  width: 950px;
  margin:0 auto;
  margin-top: 30px;

}
.card-flex{
  display: flex;
  height: 450px !important;
  overflow: auto;
}
.card-body{
  display: flex;
  flex-direction: column;
  width: 206px;
}
.card-body-title{
  text-align: center;
  border: 1px solid #000;
}
.card-body-content{
  display: flex;
}
.card-body-left__item{
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 50px;
  border: 1px solid #000;
}
.card-body-right{
  display: flex;
}
.card-body-right__item{
  width: 50px;
  border: 1px solid #000;
}

.flex-center-content{
  display: flex;
  align-items: center;
  justify-content: center;
}
.conference-room{
  position: relative;
  width: 900px;
  height: 600px;
}
.card-body-sofa{
  width: 200px;
  height: 50px;
  border: 1px solid #000;

}

.two{
  position: absolute;
  top: 0;
  left: 250px;
}

.three{
  position: absolute;
  right: 0;
  top: 504px;
}

.four{
  width: 150px;
  height: 50px;
  position: absolute;
  top: 400px;
  right: 170px;
}

.right{

  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
}
.right>div{
  height: 200px;
  border: 1px solid #000;
  
}
.yellow{
  background-color: rgb(241, 205, 177);
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-one{
  height: 300px !important;
}

.bottom{
  width: 400px;
  height: 120px;
  position: absolute;
  top: 439px;
  border: 1px solid #000;
}
.bottom-one{
  width: 200px;
  height: 50px;
  
}
.bottom-two{
  width: 100%;
  height: 50px;
  margin-top: 20px;
}

.desk-left{
  position: absolute;
  left: 20px;
  top: 170px;
  width: 204px;

  display: flex;
  flex-wrap: wrap;
}
.desk-right{
  left: 500px;
}

.desk-left__item{
  width: 100px;
  height: 55px;
  border: 1px solid #000;

}
</style>