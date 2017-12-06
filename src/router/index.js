import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/mainPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页面',
      component: main
    }
  ]
})
