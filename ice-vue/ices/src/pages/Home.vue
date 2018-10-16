<template>
  <div class="home">
    <Header></Header>
    <div class="body">
      <Side class="side"></Side>
      <div class="container">
        <div class="container-title">
          <div>Table</div>
          <div>导航一</div>
        </div>
        <div class="container-operate">
          <el-input placeholder="姓名" class="input-name" v-model="message"></el-input>
          <el-button type="primary" @click="inqureHandle">查询</el-button>
          <el-button type="primary" @click="addHandle">新增</el-button>

          <!-- dialog -->
          <el-dialog title="新增" :visible.sync="dialogFormVisible" class="operate-dialog">
            <el-form :model="role" class="dialog-form">
              <el-form-item label="姓名">
                <el-input v-model="role.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" align="true">
                <el-radio-group v-model="role.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input-number v-model="role.age"></el-input-number>
              </el-form-item>
              <el-form-item label="生日">
                <el-date-picker v-model="role.birthday" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="role.site"></el-input>
              </el-form-item>
            </el-form>
            <div class="dialog-footer">
              <el-button @click="dialogFormVisible=false">取消</el-button>
              <el-button @click="confirmAdd">确定</el-button>
            </div>
          </el-dialog>

        </div>
        <div class="container-table">
          <el-table :data="tableData" class="el-table" size="small" >
            <el-table-column label="全选" type="selection" class="el-table-col"></el-table-column>
            <el-table-column label="#" class="el-table-col">
              <template slot-scope="scope" class="template">
                <span>{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" class="el-table-col">
              <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="性别" class="el-table-col">
              <template slot-scope="scope" class="template">
                <span>{{scope.row.sex}}</span>
              </template>
            </el-table-column>
            <el-table-column label="年龄" class="el-table-col">
              <template slot-scope="scope" class="template">
                <span>{{scope.row.age}}</span>
              </template>
            </el-table-column>
            <el-table-column label="生日" class="el-table-col">
              <template slot-scope="scope" class="template">
                <span>{{scope.row.birthday}}</span>
              </template>
            </el-table-column>
            <el-table-column label="地址" class="el-table-col">
              <template slot-scope="scope" class="template">
                <span>{{scope.row.site}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" class="el-table-col">
              <template slot-scope="scope" class="template">
                <el-button class="el-button-item" icon="el-icon-edit" size="mini" @click="changeHandle(scope.$index,scope.row)"></el-button>
                <el-button class="el-button-item el-button-small" type="danger" size="mini" @click="deleteHandle(scope.$index,scope.row)" icon="el-icon-delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Side from "../components/Side";

export default {
  name: "Home",
  components: {
    Header,
    Side
  },
  data() {
    return {
      message: "",
      role: {},
      dialogFormVisible: false,
      tableData: [
        {
          name: "洪发敬",
          sex: "男",
          age: 18,
          birthday: "1996-06-06",
          site: "南京雨花台"
        },
        {
          name: "兰青云",
          sex: "女",
          age: 18,
          birthday: "1996-06-06",
          site: "南京雨花台"
        },
        {
          name: "黄旭",
          sex: "男",
          age: 18,
          birthday: "1996-06-06",
          site: "南京雨花台"
        },
        {
          name: "兰花",
          sex: "女",
          age: 18,
          birthday: "1996-06-06",
          site: "南京雨花台"
        },
      ],
      changerow:'',
      changeindex:''
    };
  },
  mounted(){

  },
  methods: {
    // 增加按钮
    addHandle() {
      this.dialogFormVisible = true;
    },

    // dialog确认添加按钮
    confirmAdd() {
      console.log(this.role,this.changerow,this.changeindex);
      if (this.role.birthday == undefined) {
        this.role.birthday = "";
      } else {
        const birthday=this.$moment(this.role.birthday).format('YYYY-MM-DD');
        this.role.birthday = birthday;
      }
      if(this.changerow){
        this.tableData.splice(this.changeindex,1,this.role);
      }else{
        this.tableData.push(this.role);
      }
      this.dialogFormVisible = false;
      this.role = {};
    },

    // 删除
    deleteHandle(index, row) {
      console.log(index, row);
      for (var i = 0; i < this.tableData.length; i++) {
        if (row.name == this.tableData[i].name) {
          this.tableData.splice(i, 1);
        }
      }
    },

    // 修改按钮
    changeHandle(index, row) {
      this.dialogFormVisible = true;
      this.role = row;
      this.changerow=row;
      this.changeindex=index;
    },

    // 模糊查询
    inqureHandle() {
      var accrod=[];
      if (this.message != "") {
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name.indexOf(this.message) != -1) {
            accrod.push(this.tableData[i]);
          }
        }
        this.tableData=accrod;
      } else {
        this.tableData=[];
      }
    }

  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .body {
    display: flex;
    .side {
      width: 15vw;
      height: 400px;
    }

    // 主体内容部分
    .container {
      width: 85vw;
      padding: 10px;
      .container-title {
        display: flex;
        justify-content: space-between;
      }
      .container-operate {
        background-color: #f2f2f2;
        padding: 10px;
        .input-name {
          width: 200px;
        }
        .operate-dialog {
          .dialog-form {
          }
        }
      }
      .container-table {
        .el-table {
          .el-table-col {
            .template {
              .el-button-item {
                width: 600px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

