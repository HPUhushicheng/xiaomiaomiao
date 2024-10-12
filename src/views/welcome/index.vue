<!-- <script setup lang="ts">
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <h1>Pure-Admin-Thin（非国际化版本）</h1>
</template> -->



<template>
  <div id="box">
    <div class="left">
      <el-button type="primary" @click="all">获取info表的全部数据</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-button type="danger" @click="del">删除</el-button>
      <el-button type="primary" @click="get">查询</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-input v-model="name" placeholder="请输入姓名" class="input"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="input"></el-input>
      <el-input v-model="studentid" placeholder="学号" class="input"></el-input>
      <el-input v-model="major" placeholder="请输入专业班级" class="input"></el-input>
      <el-input v-model="tel" placeholder="请输入电话" class="input"></el-input>
      <el-input v-model="qq" placeholder="请输入qq" class="input"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button type="primary" @click="update">修改</el-button>
    </div>
    <div class="right">
      <el-table :data="info" style="width: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="studentid" label="学号"></el-table-column>
        <el-table-column prop="major" label="专业班级"></el-table-column>
        <el-table-column prop="tel" label="联系电话"></el-table-column>
        <el-table-column prop="qq" label="qq"></el-table-column>
      </el-table>
    </div>
  </div>
</template>



<style scoped>
#box {
  display: flex;
}
.left {
  flex: 1;
  padding: 20px;
}
.right {
  flex: 2;
  padding: 20px;
}
.input {
  margin-bottom: 10px;
  width: 100%;
}
</style>

<script>
import axios from "axios"
export default {
  data () {
    return {
      id: '',
      name: '',
      password: '',
      studentid: '',
      major: '',
      tel: '',
      qq: '',
      info: []
    };
  },
  methods: {
    all() {    //查找info表全部数据
      axios.get('http://127.0.0.1:666/list/all').then(res=>{
          // console.log(res.data);
          this.info = res.data
      }).catch(err=>{
          console.log("获取数据失败" + err);
      })
    },
    del() {    //删除操作
      axios.get('http://127.0.0.1:666/list/del',{
        params: {
          id: this.id
        }
      }).then(res=>{
          // console.log(res.data);
          if(res.data.status == 200 || res.data.status == 202) {
          	this.all()
          }else{
          	this.$message({
	          message: '删除失败',
	          type: 'error'
	        });
          }
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    },
    get() {    //查询操作
      axios.get('http://127.0.0.1:666/list/get',{
        params: {
          id: this.id
        }
      }).then(res=>{
          // console.log(res.data);
          this.info = res.data
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    },
    add() {   //添加操作
      axios.get('http://127.0.0.1:666/list/add',{
        params: {
            id: this.id,
            name: this.name,
            password: this.password,
            studentid: this.studentid,
            major: this.major,
            tel: this.tel,
            qq: this.qq
        }
      }).then(res=>{
          // console.log(res.data);
          if(res.data.status == 200) {
          	this.all()
          }else{
          	this.$message({
	          message: '添加失败',
	          type: 'error'
	        });
          }
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    },
    update() {     //修改操作
      axios.get('http://127.0.0.1:666/list/update',{
        params: {
            id: this.id,
            name: this.name,
            password: this.password,
            studentid: this.studentid,
            major: this.major,
            tel: this.tel,
            qq: this.qq
        }
      }).then(res=>{
          // console.log(res.data);
          if(res.data.status == 200) {
          	this.all()
          }else{
          	this.$message({
	          message: '修改失败',
	          type: 'error'
	        });
          }
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    }
  }
}
</script>



