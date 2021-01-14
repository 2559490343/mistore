// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    goodList: [
      {
        img: '../../static/img/phone1.jpg',
        name: 'Redmi K30 4G',
        text: '120Hz流速屏，全速热爱',
        price: '￥1299起'
      },
      {
        img: '../../static/img/phone2.jpg',
        name: 'Redmi K30 5G',
        text: '双模5G，120Hz流速屏',
        price: '￥1599起'
      },
      {
        img: '../../static/img/phone3.jpg',
        name: 'Note 8 Pro',
        text: '6400万全场景四摄',
        price: '￥1099起'
      },
      {
        img: '../../static/img/phone4.jpg',
        name: 'Redmi Note 8',
        text: '千元4800万四摄',
        price: '￥899起'
      },
    ]
  },
  // 事件处理函数
  toDetail(e) {
    const target = e.target;
    const index = target.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?index=' + index
    })
  },
  onLoad() {
  },
})
