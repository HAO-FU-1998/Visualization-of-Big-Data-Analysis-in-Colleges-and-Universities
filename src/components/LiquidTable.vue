<template>
    <div class="liquid">
        <Row class="liquid-detail" >
          <Col span="12">
            <ve-gauge height="100%" :data="gaugeData" :settings="gaugeSettings"></ve-gauge>
          </Col>
          <Col span="12">
            <ve-liquidfill height="100%" :settings="chartSettings" :data="chartData" lengend-visible="false"></ve-liquidfill>
          </Col>
        </Row>
        <Row class="liquid-detail2">
          结课数：{{num2}}门           开课总数：{{num1+num2}}门
        </Row>
    </div>
</template>

<script>
export default {
  name: 'LiquidTable',
  data () {
    return {
      num1: 32,
      num2: 3,
      chartData: {
      },
      gaugeData: {},
      gaugeSettings: {
        seriesMap: {
          '已完成科目': {
            min: 0,
            max: 15,
            radius: '75%',
            splitNumber: 15,
            axiLine: {
              lineStyle: {
                color: [[0.09, '#ff4500'], [0.82, '#00ff00'], [1, '#00ff00']],
                width: 3
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            axisTick: {
              length: 15,
              lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            splitLine: {
              length: 25,
              lineStyle: {
                width: 3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            pointer: {
              shadowColor: '#fff',
              shadowBlur: 5
            }
          }
        }
      },
      chartSettings: {
        seriesMap: {
          '总体教学进度': {
            type: 'liquidFill',
            name: '总体教学进度',
            color: ['#3e96ff'],
            radius: '75%',
            data: [{
              value: 0.6,
              direction: 'right',
              itemStyle: {
                normal: {
                  color: '#87CEEB'
                }
              }
            }, {
              value: 0.4,
              direction: 'left',
              itemStyle: {
                normal: {
                  color: '#4169E1'
                }
              }
            }, {
              value: 0.2,
              direction: 'right',
              itemStyle: {
                normal: {
                  color: '#00008B'
                }
              }
            }],
            shape: 'path://M18.98 5.7c-.24-2.36-2.24-4.2-4.66-4.2-1.95 0-3.6 1.18-4.32 2.87-.7-1.7-2.37-2.87-4.32-2.87-2.42 0-4.42 1.84-4.66 4.2L1 6.18c0 5.7 6.98 8.38 9 12.17 2.02-3.8 9-6.48 9-12.17 0-.16 0-.32-.02-.48z',
            itemStyle: {
              opacity: 1
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            backgroundStyle: {
              color: 'transparent'
            },
            label: {
              formatter (options) {
                const {
                  seriesName,
                  value
                } = options
                return `${seriesName}\n${Math.ceil(value * 100)}%`
              },
              fontSize: '35',
              color: '#00BFFF',
              insideColor: '#fff'
            },
            outline: {
              borderDistance: 5,
              itemStyle: {
                borderWidth: 4,
                borderColor: '#FF8C00'
              }
            }
          }
        }
      }
    }
  },
  methods: {
    classOpen () {
      this.commonUtil.getUtil(this.globalApi.getOpenClass, {}, res => {
        if (res.code === 200) {
          this.gaugeData = res.data.gaugeData
          this.chartData = res.data.chartData
          this.num1 = res.data.unfinished
          this.num2 = res.data.finish
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.classOpen()
  }
}
</script>

<style scoped lang="less">
.liquid{
  display: flex;
  justify-content: center;
  flex-direction: column;
  .liquid-detail{
    height: 60%;
    .liquid-text{
      width: 46%;
      height: 25%;
      border-radius: 50%;
      text-align: center;
      background-color: #f95d5b;
      color: #fff;
      position: relative;
      top: 35%;
      margin: 0 auto;
      padding-top: 1.7vh;
      font-size: 1.2vh;
    }
    .liquid-text-right{
      background-color: #ebb44a;
    }
  }
  .liquid-detail2{
    text-align: center;
    color: #fff;
    font-size: 1.8vh;
  }
}
</style>
<style lang="less">
  .liquid-detail{
    .ivu-col{
      height: 100%;
    }
  }
</style>
