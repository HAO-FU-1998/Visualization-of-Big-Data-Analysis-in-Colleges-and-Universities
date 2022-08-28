<template>
  <div class="histogram">
    <ve-histogram :data="charData" :height="hisHeight" :extend="extend" :settings="chartSettings" :colors="colors" :legend-visible="legendVisible" :mark-line="markLine"
                  :mark-point="markPoint" :toolbox="toolbox"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: 'HistogramTable',
  data () {
    this.toolbox = {
      feature: {
        magicType: {type: ['line', 'bar']},
        saveAsImage: {}
      }
    }
    this.markLine = {
      data: [
        {
          name: '平均线',
          type: 'average'
        }
      ]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
    return {
      charData: {},
      hisHeight: '100%',
      extend: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          textStyle: {
            color: '#fff',
            fontSize: '20'
          }
        },
        series: [{
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            emphasis: {
              barBorderRadius: 7
            },
            normal: {
              barBorderRadius: 7,
              color: new this.$ECharts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  {offset: 0, color: '#3977E6'},
                  {offset: 1, color: '#37BBF8'}

                ]
              )
            }
          }
          // label: { show: true, position: 'top' }
        },
        {
          type: 'line'
        }
        ],
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: '20'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        }
      },
      chartSettings: {},
      colors: [],
      legendVisible: false
    }
  },
  props: ['tableType'],
  methods: {
    drawHis (type) {
      switch (type) {
        case 'class-status':
          this.hisHeight = '95%'
          this.classStatus()
          break
        case 'testDetail':
          this.testDetail()
          break
      }
    },
    classStatus () {
      this.commonUtil.getUtil(this.globalApi.getClassStatus, {}, res => {
        if (res.code === 200) {
          this.legendVisible = true
          this.charData = res.data.chartData
          this.colors = ['#ff60a8', '#3ebbd0']
          this.extend.series.label = {
            show: false,
            position: 'left'
          }
          this.extend.series.barWidth = '20%'
          this.extend.series.legend = {
            textStyle: {
              color: '#fff'
            }
          }
          this.extend.series.itemStyle = {
            emphasis: {
              barBorderRadius: 7
            },
            normal: {
              barBorderRadius: 7
              // color: new this.$ECharts.graphic.LinearGradient(0, 0, 1, 0,
              //   [
              //     {offset: 0, color: '#ff60a8'},
              //     {offset: 1, color: '#37BBF8'}
              //
              //   ]
              // )
            }
          }
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.drawHis(this.tableType)
  }
}
</script>

<style scoped>

</style>
