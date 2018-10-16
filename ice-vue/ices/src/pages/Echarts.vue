<template>
  <div class="echarts">
    <Header></Header>
    <div class="body">
      <Side class="side"></Side>
      <div class="container">
        <div id="myChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Side from "../components/Side";

export default {
  name: "Echarts",
  components: {
    Header,
    Side
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      console.log(myChart);
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  .body {
    display: flex;
    .side {
      width: 15vw;
      height: 400px;
    }
    .container {
      width: 85vw;
      padding: 10px;
      #myChart{
        width: 200px;
        height: 200px;
      }
      .container-title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

