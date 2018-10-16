<template>
  <div class="vuexPage">
    <Header></Header>
    <div class="body">
      <Side></Side>
      <div class="container">
        <div>页面4</div>
        <h2>vuex测试</h2>
        <div>
          Clicked:{{times}}times
        </div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Side from '../components/Side';

export default {
  name:'VuexPage',
  components:{
    Header,
    Side
  },
  data(){
    return{
      times:10
    }
  }
}
</script>

<style lang="scss" scoped>
.vuexPage{
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

