<template>
  <div class="form">
    <Header></Header>
    <div class="body">
      <Side class="side"></Side>
      <div class="container">
        <div class="container-title">
          <div>form</div>
          <div>导航一</div>
        </div>
        <div class="container-form">
          <el-form :model="ruleForm">
            <el-form-item label="活动名称">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input placeholder="请选择活动区域"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col>
                <el-form-item>
                  <el-date-picker placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col>-</el-col>
              <el-col>
                <el-form-item>
                  <el-time-picker placeholder="选择时间"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group>
                <el-checkbox label="美食/餐厅线上活动"></el-checkbox>
                <el-checkbox label="地推活动"></el-checkbox>
                <el-checkbox label="线下主题活动"></el-checkbox>
                <el-checkbox label="单纯品牌曝光"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group>
                <el-radio label="线上品牌赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitForm">立即创建</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Side from '../components/Side';

export default {
  name:'form',
  data(){
    return{
      ruleForm:{
        name:'5555',
        region:'',
        date1:'',
        tate2:'',
        delivery:false,
        type:[],
        resource:'',
        desc:''
      }
    }
  },
  components:{
    Header,
    Side
  },
  methods:{
    submitForm(){

    },
    // 重置表格
    resetForm(){}
  }
}
</script>

<style lang="scss" scoped>
.form{
  width: 100%;
  height: 100%;
  .body{
    display: flex;
    .side{
      width: 15vw;
      height: 400px;
    }
    .container{
      width: 85vw;
      padding: 10px;
      .container-title{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>


