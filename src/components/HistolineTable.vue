<template>
  <div class="histogram">
    <ve-histogram :data="chartData" :height="hisHeight" :extend="extend" :settings="chartSettings" :colors="colors" :legend-visible="legendVisible" :mark-line="markLine"
                  :data-zoom="dataZoom"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: 'HistolineTable',
  data () {
    this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 100
      }
    ]
    this.markLine = {
      data: [
        {
          name: '平均线',
          type: 'average'
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
          barWidth: '20%'
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
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: '20'
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
    testDetail () {
      this.commonUtil.getUtil(this.globalApi.gettestDetail, {}, res => {
        if (res.code === 200) {
          this.chartData = res.data.chartData
          this.chartSettings = {
            axisSite: {right: ['批阅实验总数']},
            yAxisType: ['value', 'value'],
            yAxisMax: ['1600', '800'],
            yAxisSplitNumber: ['8', '8'],
            stack: { '评分': ['智能评测', '手动打分'] },
            showLine: ['批阅实验总数']
          }
          this.legendVisible = true
          this.colors = [ '#bb5ffb', '#90ff14', '#ff702c' ]
          this.extend.series.barWidth = '20%'
          this.extend.series.legend = {
            textStyle: {
              color: '#fff'
            }
          }
          this.extend.yAxis.max = 800
          this.extend.yAxis.yAxisSplitNumber = 2
          this.extend.series.label = { show: true, position: 'right' }
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
