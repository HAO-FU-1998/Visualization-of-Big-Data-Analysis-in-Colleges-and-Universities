import Vue from 'vue'
import Router from 'vue-router'
import TheHeader from '@/components/TheHeader'
import Main from '@/containers/Main'
import EchartsTest from '@/components/EchartsTest'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/the-header',
      name: 'TheHeader',
      component: TheHeader
    },
    {
      path: '/echartTest',
      name: 'echartTest',
      component: EchartsTest
    }
  ]
})
