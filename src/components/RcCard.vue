<template>
  <div class="rc-card">
    <div class="card-title">
      <img class="title-icon" :src="constant.COLOR_TITLE[colorTag].src" />
      <span class="title-content" :style="{color:constant.COLOR_TITLE[colorTag].color}">{{title}}</span>
    </div>
    <div class="card-content">
      <slot name="card-main">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RcCard',
  data () {
    return {}
  },
  props: {
    colorTag: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '一级标题'
    }
  }
}
</script>

<style scoped lang="less">
  .rc-card {
    display: inline-block;
    background: url("../assets/img/bg_2.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    border-radius: 9px;
    padding: 10px 16px;
    .card-title {
      height: 3vw;
      line-height: 3vw;
      width: 100%;
      .title-icon {
        width: 1.5vw;
        height: 1.5vw;
        margin-right: 3px;
        vertical-align: middle;
      }
      .title-content {
        font-size: 1vw;
        vertical-align: middle;
      }
    }
    .card-content {
      height: 85%;
    }
    .card-content div:first-child {
      height: 100%;
    }
  }
</style>
