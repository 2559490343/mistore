const wxRequest = (method, url, params) => {
  let baseURL = "http://localhost:3333/";
  return new Promise((resolve, reject) => {
    //显示loading
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: baseURL + '' + url,
      method: method,
      data: params,
      header: {
        'Content-Type': 'application/json',
        'timeStamp': Date.now(),
      },
      success(res) {
        //隐藏loading
        wx.hideLoading();
        if (res.data.code != 200) {
          //显示错误信息
          wx.showToast({
            title: res.data.info,
            icon: 'none',
          })
        }
        resolve(request);
      },
      fail(error) {
        //隐藏loading
        wx.hideLoading();
        reject(error);
      }
    })
  });
}
module.exports = wxRequest