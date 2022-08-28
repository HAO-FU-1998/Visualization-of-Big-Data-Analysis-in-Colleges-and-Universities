<template>
  <div class="bar-main">
    <ve-bar :data="chartData" :height="barHeight" :extend="extend" :settings="chartSettings"
            :colors="colors" :legend-visible="false"></ve-bar>
  </div>
</template>

<script>
/* 此处为引入自定义组件及插件区域 */
export default {
  // name 为组件名称 由ide自动生成
  name: 'BarTable',
  // props 为父组件向子组件传值接受区域 可以指定偏亮默认值 类型等
  props: {
    barType: {
      default: '1',
      type: String
    }
  },
  // data 为自定义变量声明区域 注意与网上教程不同 data为一个function 返回值为一个json 在其中声明变量,声明后与别处通过this.进行调用
  data () {
    return {
      chartData: {},
      barHeight: '100%',
      extend: {
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#FFF', // 更改坐标轴文字颜色
              fontSize: '20'
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#FFF', // 更改坐标轴文字颜色
              fontSize: '20'
            }
          }
        },
        series: {
          type: 'bar',
          barWidth: 20,
          itemStyle: {
            normal: {
            }
          }
        }
      },
      chartSettings: {},
      colors: []
    }
  },
  // methods 为自定义方法声明区域，声明后于别处通过this.进行调用
  methods: {
    testDetail () {
      if (this.barType === '1') {
        this.commonUtil.getUtil(this.globalApi.getTestDetail, {}, res => {
          if (res.code === 200) {
            this.chartData = res.data.chartData
            this.colors = ['#60e88c']
            this.extend.series.itemStyle = {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
                color: new this.$ECharts.graphic.LinearGradient(0, 0, 1, 0,
                  [
                    {offset: 0, color: '#ff60a8'},
                    {offset: 1, color: '#37BBF8'}

                  ]
                )
              }
            }
          }
        }, err => {
          console.log(err)
        })
      } else {
        this.commonUtil.getUtil(this.globalApi.getTestDetail2, {}, res => {
          if (res.code === 200) {
            this.chartData = res.data.chartData
            this.colors = ['#ff620e']
            this.extend.series.itemStyle = {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
                color: new this.$ECharts.graphic.LinearGradient(0, 0, 1, 0,
                  [
                    {offset: 0, color: '#60e88c'},
                    {offset: 1, color: '#ff620e'}

                  ]
                )
              }
            }
          }
        }, err => {
          console.log(err)
        })
      }
    }
  },
  // vue生命周期钩子之一 当页面内容挂载后执行的相关逻辑
  mounted () {
    this.testDetail()
  }
}
</script>

<style scoped>

</style>
