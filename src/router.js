import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue' //首页
import About from './views/About.vue' //全新楼盘
import Page from './views/Page.vue'   //详情页
import Journalism from './views/Journalism.vue' //新闻
import Lianxi from './views/Lianxi.vue'  //联系我们
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'xiangqing',
      component: Page
    },
    {
      path: '/journalism',
      name: 'loushi',
      component: Journalism
    },
     {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    },
    {
      path: '/detail2/:id',
      name: 'detail2',
      component: Detail
    },
  ]
})
