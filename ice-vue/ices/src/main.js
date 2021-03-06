// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入 echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

// 引入vuex store模块
import store from './store/index';

// 导入moment
import moment from 'moment';
Vue.prototype.$moment=moment;

// 导入自定义插件
import sky from './plugs/sky';
Vue.prototype.$sky=sky;

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
