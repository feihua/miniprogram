// pages/address/list/index.js
Page({
  // 页面的初始数据
  data: {
    addressList: [1, 2, 3]
  },

  // 去编辑页面
  toEdit() {
    wx.navigateTo({
      url: '/modules/settingModule/pages/address/add/index'
    })
  }
})
