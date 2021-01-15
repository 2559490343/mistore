// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkImg: '../../static/img/check.png',
    count: 1
  },
  downCount() {
    let count = this.data.count;
    if (count > 1) {
      this.setData({
        count: --count
      })
    }
  },
  upCount() {
    let count = this.data.count;
    if (count < 99) {
      this.setData({
        count: ++count
      })
    }
  },
  toIndex() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  buy() { },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar({
      animation: false,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.showTabBar({
      animation: false,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})