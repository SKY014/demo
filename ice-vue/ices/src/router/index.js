import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home';
import Form from '../pages/Form';
import Echarts from '../pages/Echarts';
import VuexPage from '../pages/VuexPage';
import Login from '../pages/Login';
import List from '../pages/List';
import Register from '../pages/Register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/vuexpage',
      name: 'VuexPage',
      component: VuexPage
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path:'/list',
      name:'List',
      component:List
    },{
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
