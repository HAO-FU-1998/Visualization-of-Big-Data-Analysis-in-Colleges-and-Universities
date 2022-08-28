<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "./assets/css/reset.css";
  #app, html, body{
    height: 100%;
    overflow-x: hidden;
  }
</style>
