<template>
    <div class="main">
      <the-header></the-header>
      <div class="content">
        <content-one></content-one>
      </div>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import ContentOne from '@/components/ContentOne'
export default {
  name: 'Main',
  components: {
    TheHeader,
    ContentOne
  }
}
</script>

<style scoped lang="less">
  .main{
    height: 100%;
    background: url("../assets/img/bg.png");
    .content{
      height: calc(100% - 91px);
    }
  }
</style>
