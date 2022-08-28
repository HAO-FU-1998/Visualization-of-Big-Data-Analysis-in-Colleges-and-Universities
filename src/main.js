// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VeLine from 'v-charts/lib/line'
import VCharts from 'v-charts'
import ECharts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(iView)
Vue.use(VCharts)
Vue.use(VeLine)
Vue.config.productionTip = false

Vue.prototype.$ECharts = ECharts
// this.ECharts = this.$ECharts.init(document.querySelector('#ECharts'))

const commonUtil = require('@/common/utils')
Vue.prototype.commonUtil = commonUtil

const constant = require('@/common/constants')
Vue.prototype.constant = constant

// 引入MOCk组件
process.env.MOCK && require('@/common/mock')
// 引入api配置文件
const api = require('@/common/url/api')
Vue.prototype.globalApi = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
