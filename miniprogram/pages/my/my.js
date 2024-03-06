// pages/info/info.js
Page({
  // 页面的初始数据
  data: {
    // 初始化第二个面板数据
    initpanel: [
      {
        url: '/pages/order/list/list',
        title: '商品订单',
        iconfont: 'icon-dingdan'
      },
      {
        url: '/pages/order/list/list',
        title: '礼品卡订单',
        iconfont: 'icon-lipinka'
      },
      {
        url: '/pages/order/list/list',
        title: '退款/售后',
        iconfont: 'icon-tuikuan'
      }
    ]
  },

  // 跳转到登录页面
  toLoginPage() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  }
})
