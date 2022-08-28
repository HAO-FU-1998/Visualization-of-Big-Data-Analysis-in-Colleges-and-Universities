const axios = require('axios')
const preUrl = require('./url')

module.exports = {
  ajaxTestUtil (url, param, thenFun, exeFun) {
    axios({
      methods: 'get',
      url: './static/json/' + url,
      params: param
    }).then(function (res) {
      thenFun.call(this, res.data)
    }).catch(function (error) {
      exeFun.call(this, error)
    })
  },
  getUtil (url, param, thenFun, exeFun) {
    axios({
      methods: 'get',
      url: preUrl.interfaceUrl + url,
      params: param
    }).then(function (res) {
      thenFun.call(this, res.data)
    }).catch(function (error) {
      exeFun.call(this, error)
    })
  }
}
