<template>
  <div class="side">
    <router-link to="/">table</router-link><br>
    <router-link to="/form">form</router-link><br>
    <router-link to="/echarts">echarts</router-link><br>
    <router-link to="/vuexpage">vuex</router-link>
  </div>
</template>

<script>
export default {
  name:'Side'
}
</script>

<style lang="scss" scoped>
.side{
  background-color: #EEF1F6;
}

</style>

