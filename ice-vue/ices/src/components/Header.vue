<template>
  <div class="header">
    <div class="aside">header从VB小</div>
    <div class="container">
      <div>
        <i class="el-icon-share" @click="detailHandle"></i>
      </div>
      <div>
        <router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    detailHandle(){
      console.log('00000');
    }
  }
  
}
</script>

<style lang="scss" scoped>
.header{
  background-color: #20A0FF;
  height: 60px;
  color: white;
  display: flex;
  .aside{
    line-height: 60px;
    font-size: 30px;
    width: 230px;
    background-color: lightblue;
  }
}
</style>

