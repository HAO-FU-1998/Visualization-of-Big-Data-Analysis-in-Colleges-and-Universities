const Mock = require('mockjs')
const Api = require('../url/api')
let random = Mock.Random
Mock.mock(new RegExp(Api.test), 'get', [
  {
    name: random.name(),
    age: random.integer(10, 20),
    address: random.county(true),
    date: random.date('yy-MM-dd')
  },
  {
    name: '@name',
    age: '@integer',
    address: 'London No. 1 Lake Park',
    date: '2016-10-01'
  },
  {
    name: '@cname',
    age: 30,
    address: 'Sydney No. 1 Lake Park',
    date: '2016-10-02'
  },
  {
    name: 'Jon Snow',
    age: 26,
    address: 'Ottawa No. 2 Lake Park',
    date: '2016-10-04'
  }
])
Mock.mock(new RegExp(Api.getForm), 'get', {
  'code': 500,
  'data': {
    'userName': '@cname',
    'password|2-3': 'sdaf'
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getEchartsLine), 'get', {
  'code': 200,
  'data': {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows: [
      { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
      { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
      { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
      { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
      { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
      { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
    ]
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getClassStatus), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['时间', '已完结', '预计完结'],
      rows: [
        { '时间': '1月', '已完结': 0, '预计完结': 0 },
        { '时间': '2月', '已完结': 2, '预计完结': 4 },
        { '时间': '3月', '已完结': 6, '预计完结': 6 },
        { '时间': '4月', '已完结': 10, '预计完结': 19 },
        { '时间': '5月', '已完结': 3, '预计完结': 2 }
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getOpenClass), 'get', {
  'code': 200,
  'data': {
    gaugeData: {
      columns: ['type', 'value'],
      rows: [
        { 'type': '已完成科目', 'value': 32 }
      ]
    },
    chartData: {
      columns: ['type', 'value'],
      rows: [
        {'type': '总体教学进度', 'value': 0.57}
      ]
    },
    unfinished: 32,
    finish: 10
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getActiveData), 'get', {
  'code': 200,
  'data': {
    'teacher': {
      'columns1': [
        {
          'type': 'index',
          'title': '序号',
          'width': 80,
          'align': 'center'
        },
        {
          'title': '编号',
          'key': 'idNum',
          'width': 175,
          'align': 'center'
        },
        {
          'title': '姓名',
          'key': 'name',
          'width': 110,
          'align': 'center'
        },
        {
          'title': '在线时长',
          'key': 'onlineTime',
          'width': 120,
          'align': 'center'
        },
        {
          'title': '活跃值',
          'key': 'activeValue',
          'width': 118,
          'align': 'center',
          'sortable': true
        }
      ],
      'data1': [
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'},
        {'idNum': '@integer(1000000000, 1000009999)', 'name': '@cname', 'onlineTime': '@integer(0, 100)h', 'activeValue': '@integer(500, 1000)'}
      ]
    },
    'student': {
      'columns1': [
        {
          'type': 'index',
          'title': '序号',
          'width': 80,
          'align': 'center'
        },
        {
          'title': '学号',
          'key': 'idNum',
          'width': 175,
          'align': 'center'
        },
        {
          'title': '姓名',
          'key': 'name',
          'width': 110,
          'align': 'center'
        },
        {
          'title': '在线时长',
          'key': 'onlineTime',
          'width': 120,
          'align': 'center'
        },
        {
          'title': '活跃值',
          'key': 'activeValue',
          'width': 118,
          'align': 'center'
        }
      ],
      'data1': [
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'},
        {'idNum': '@integer(3016218000, 3016218200)', 'name': '@cname', 'onlineTime': '@integer(100, 200)h', 'activeValue': '@integer(800, 1000)'}
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getTestDetail), 'get', function (opt) {
  let back = {
    'code': 200,
    'data': {
      chartData: {
        columns: ['课程', '百分比'],
        rows: []
      }
    },
    'msg': '获取数据有误，请联系管理员'
  }
  let params = opt.url.split('=')[1]
  if (params === '1') {
    back.data.chartData.rows = [
      {'课程': 'Java架构技术', '百分比': 0.32},
      {'课程': 'PHP入门', '百分比': 0.52},
      {'课程': '数据库原理', '百分比': 0.82},
      {'课程': 'Web基础', '百分比': 0.92},
      {'课程': 'Java程序设计', '百分比': 0.12}
    ]
  } else {
    back.data.chartData.rows = [
      {'课程': 'UML建模', '百分比': 0.32},
      {'课程': 'C程序设计', '百分比': 0.52},
      {'课程': '数据结构', '百分比': 0.82},
      {'课程': '汇编语言', '百分比': 0.92},
      {'课程': 'C++程序设计', '百分比': 0.12}
    ]
  }
  return back
})
Mock.mock(new RegExp(Api.getScatterData), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['日期', '分数', '人数'],
      rows: {
        'Java': [
          { '日期': '1/1', '人数': 123, '分数': 50 },
          { '日期': '1/1', '人数': 35, '分数': 45 },
          { '日期': '1/1', '人数': 87, '分数': 95 },
          { '日期': '1/1', '人数': 93, '分数': 87 },
          { '日期': '1/1', '人数': 104, '分数': 48 },
          { '日期': '1/1', '人数': 23, '分数': 67 },
          { '日期': '1/2', '人数': 90, '分数': 60 },
          { '日期': '1/2', '人数': 68, '分数': 65 },
          { '日期': '1/2', '人数': 32, '分数': 74 },
          { '日期': '1/2', '人数': 61, '分数': 81 },
          { '日期': '1/2', '人数': 96, '分数': 87 },
          { '日期': '1/2', '人数': 35, '分数': 96 },
          { '日期': '1/3', '人数': 80, '分数': 70 },
          { '日期': '1/3', '人数': 78, '分数': 63 },
          { '日期': '1/3', '人数': 95, '分数': 58 },
          { '日期': '1/3', '人数': 37, '分数': 83 },
          { '日期': '1/3', '人数': 54, '分数': 95 },
          { '日期': '1/4', '人数': 70, '分数': 80 },
          { '日期': '1/4', '人数': 63, '分数': 78 },
          { '日期': '1/4', '人数': 58, '分数': 95 },
          { '日期': '1/4', '人数': 83, '分数': 37 },
          { '日期': '1/4', '人数': 95, '分数': 54 },
          { '日期': '1/5', '人数': 60, '分数': 90 },
          { '日期': '1/5', '人数': 65, '分数': 68 },
          { '日期': '1/5', '人数': 74, '分数': 62 },
          { '日期': '1/5', '人数': 81, '分数': 61 },
          { '日期': '1/5', '人数': 87, '分数': 96 },
          { '日期': '1/5', '人数': 46, '分数': 93 }
        ],
        '大数据': [
          { '日期': '1/1', '人数': 80, '分数': 43 },
          { '日期': '1/1', '人数': 62, '分数': 74 },
          { '日期': '1/1', '人数': 68, '分数': 94 },
          { '日期': '1/1', '人数': 21, '分数': 58 },
          { '日期': '1/1', '人数': 14, '分数': 51 },
          { '日期': '1/1', '人数': 16, '分数': 97 },
          { '日期': '1/2', '人数': 70, '分数': 70 },
          { '日期': '1/2', '人数': 54, '分数': 91 },
          { '日期': '1/2', '人数': 27, '分数': 65 },
          { '日期': '1/2', '人数': 61, '分数': 86 },
          { '日期': '1/2', '人数': 65, '分数': 77 },
          { '日期': '1/2', '人数': 35, '分数': 71 },
          { '日期': '1/3', '人数': 53, '分数': 83 },
          { '日期': '1/3', '人数': 78, '分数': 63 },
          { '日期': '1/3', '人数': 51, '分数': 94 },
          { '日期': '1/3', '人数': 34, '分数': 76 },
          { '日期': '1/3', '人数': 56, '分数': 93 },
          { '日期': '1/4', '人数': 65, '分数': 36 },
          { '日期': '1/4', '人数': 66, '分数': 72 },
          { '日期': '1/4', '人数': 48, '分数': 53 },
          { '日期': '1/4', '人数': 84, '分数': 64 },
          { '日期': '1/4', '人数': 16, '分数': 100 },
          { '日期': '1/5', '人数': 63, '分数': 34 },
          { '日期': '1/5', '人数': 36, '分数': 16 },
          { '日期': '1/5', '人数': 67, '分数': 42 },
          { '日期': '1/5', '人数': 87, '分数': 84 }
        ]
      }
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.gettestDetail), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['日期', '智能评测', '手动打分', '批阅实验总数'],
      rows: [
        { '日期': '11-8', '智能评测': 220, '手动打分': 190, '批阅实验总数': 410 },
        { '日期': '11-9', '智能评测': 211, '手动打分': 186, '批阅实验总数': 397 },
        { '日期': '11-10', '智能评测': 450, '手动打分': 210, '批阅实验总数': 660 },
        { '日期': '11-11', '智能评测': 80, '手动打分': 20, '批阅实验总数': 100 },
        { '日期': '11-12', '智能评测': 79, '手动打分': 19, '批阅实验总数': 98 },
        { '日期': '11-13', '智能评测': 456, '手动打分': 230, '批阅实验总数': 686 },
        { '日期': '11-14', '智能评测': 460, '手动打分': 180, '批阅实验总数': 640 },
        { '日期': '11-15', '智能评测': 552, '手动打分': 18, '批阅实验总数': 570 },
        { '日期': '11-16', '智能评测': 420, '手动打分': 95, '批阅实验总数': 515 },
        { '日期': '11-17', '智能评测': 182, '手动打分': 442, '批阅实验总数': 624 }
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
