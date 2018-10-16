<template>
  <div class="login">
    <div class="container">
      <h2>登录系统</h2>
      <el-form :model="formData">
        <el-input v-model="formData.name" size="mini" placeholder="请输入用户名"></el-input><br><br>
        <el-input v-model="formData.password" size="mini" placeholder="请输入密码"></el-input><br><br>

        <el-button @click="submitForm">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'login',
  data(){
    return{
      formData:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    // 提交表单登录
    submitForm(){
      console.log(this.formData);
      axios.post('http://192.168.0.107:3000/login',this.formData,(res)=>{
        console.log('登录');
      })
    }

    
  }
}
</script>

<style lang="scss" scoped>
.login{
  .container{
    margin: 0 auto;
    width: 350px;
    height: 350px;
  }
}
</style>
