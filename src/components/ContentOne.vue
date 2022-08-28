<template>
    <div class="content-one">
      <Row class="row-1" :gutter="24">
        <Col span="12" class="col">
          <rc-card :colorTag="4" title="本学期开课情况">
            <liquid-table slot="card-main" style="width:50%; float:left; height:100%"></liquid-table>
            <div slot="card-main" class="status-body" style="width:50%; float:right; height:100%">
              <span class="status-title">各月结课情况</span>
              <histogram-table table-type="class-status" style="height: 100%"></histogram-table>
            </div>
          </rc-card>
        </Col>
        <Col span="6" class="col">
          <rc-card :colorTag="1" title="今日师生活跃度">
            <to-day-activity slot="card-main"></to-day-activity>
          </rc-card>
        </Col>
        <Col span="6" class="col col-two">
          <Row>
            <rc-card :colorTag="3" title="今日实验完成率">
              <bar-table slot="card-main" barType="1" style="height: 89%"></bar-table>
            </rc-card>
          </Row>
          <Row>
            <rc-card :colorTag="3" title="昨日实验完成率">
              <bar-table slot="card-main" barType="2" style="height: 89%"></bar-table>
            </rc-card>
          </Row>
        </Col>
      </Row>
      <Row class="row-1" :gutter="24">
        <Col span="12" class="col">
          <rc-card :colorTag="2" title="近10日实验批阅情况">
            <histoline-table slot="card-main" table-type="testDetail" style="height: 100%"></histoline-table>
          </rc-card>
        </Col>
        <Col span="12" class="col">
          <rc-card :colorTag="1" title="近10日实验成绩分布">
            <scatter-table slot="card-main"></scatter-table>
          </rc-card>
        </Col>
      </Row>
    </div>
</template>

<script>
import RcCard from '@/components/RcCard.vue'
import HistogramTable from '@/components/HistogramTable.vue'
import LiquidTable from '@/components/LiquidTable.vue'
import ToDayActivity from '@/components/ToDayActivity.vue'
import BarTable from '@/components/BarTable.vue'
import ScatterTable from '@/components/ScatterTable.vue'
import HistolineTable from '@/components/HistolineTable.vue'
export default {
  name: 'content',
  components: {
    RcCard,
    HistogramTable,
    LiquidTable,
    ToDayActivity,
    BarTable,
    ScatterTable,
    HistolineTable
  }
}
</script>

<style lang="less">
  .content-one{
    width: 100%;
    height: 100%;
    .row-1{
      height: 50%;
      padding: 24px 24px 8px 24px;
      .col{
        height: 100%;
      }
      .col-two {
        display: flex;
        flex-direction: column;
        .ivu-row {
          flex: 1;
          padding-bottom: 2%;
        }
      }
    }
    .status-body {
      display: flex;
      flex-direction: column;
      .status-title {
        text-align: center;
        color: #fff;
        font-size: 2vh;
        margin-bottom: 2vh;
      }
    }
    .element::-webkit-scrollbar {display:none}
  }
</style>
