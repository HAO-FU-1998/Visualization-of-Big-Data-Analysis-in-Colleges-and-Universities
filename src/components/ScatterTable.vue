<template>
  <div class="scatter-main">
    <ve-scatter :data="chartData" :settings="chartSettings" :colors="colors" :legend-visible="legendVisible" width="100%" height="100%" :extend="extend"></ve-scatter>
  </div>
</template>

<script>
export default {
  name: 'ScatterTable',
  data () {
    return {
      value2: 0,
      legendVisible: false,
      chartData: {},
      chartSettings: {
        type: 'effectScatter',
        dimension: '日期',
        metrics: ['分数', '人数'],
        symbol: 'path://M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z',
        symbolSizeMax: 100,
        // symbolRotate: 45,
        symbolOffset: [10, 10]
      },
      extend: {
        series: [{
          type: 'effectScatter',
          rippleEffect: {
            period: 4,
            scale: 2.5,
            brushType: 'stroke'
          },
          showEffectOn: 'render',
          hoverAnimation: true
        }
        ],
        grid: {
          y: 5,
          y2: 5
        },
        legend: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '15'
          }
        },
        xAxis: {
          axisLabel: {
            color: '#fff',
            fontSize: '20'
          }
        },
        yAxis: {
          axisLabel: {
            color: '#fff'
          }
        }
      }
    }
  },
  methods: {
    getScatterData () {
      this.commonUtil.getUtil(this.globalApi.getScatterData, {}, res => {
        if (res.code === 200) {
          this.chartData = res.data.chartData
          this.colors = ['#800080', '#FFD700']
          this.legendVisible = true
          this.extend.series = [{
            type: 'effectScatter',
            rippleEffect: {
              period: 4,
              scale: 2.5,
              brushType: 'fill'
            },
            showEffectOn: 'render',
            hoverAnimation: true
          }]
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getScatterData()
  }
}
</script>

<style scoped>
.zouma {
  overflow:hidden;
  width:100%;
  height:100%;
  padding-bottom:30.48%;
}
</style>
