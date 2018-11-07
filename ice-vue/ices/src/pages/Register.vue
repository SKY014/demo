<template>
  <div class="register">
    <div class="container">
      <h2>注册页面</h2>
      <el-form :model="formData">
        <el-input v-model="formData.name" size="mini" placeholder="请输入用户名"></el-input><br><br>
        <el-input v-model="formData.password" size="mini" placeholder="请输入密码"></el-input><br><br>
        <el-input placeholder="请确认密码" size="mini"></el-input>
        <div>
          <router-link to="/login">去登录</router-link>
        </div>
        <el-button @click="submitForm">注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name:'Register',
  data(){
    return{
      formData:{
        name:'',
        password:''
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.register{
  .container{
    margin: 0 auto;
    width: 350px;
    height: 350px;
  }
}
</style>
