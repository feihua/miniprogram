// 导入封装的接口 API
import { reqCategoryData } from '../../api/category'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [], // 分类数据列表
    activeIndex: 0, // 点击高亮导航id
  },

  // 导航分类点击事件
  updateActive(e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
   },
   
  // 生命周期函数--监听页面加载
  onLoad(options) {
    // 获取页面中使用的
    this.getCategoryData()
  },

  // 获取页面初始化时，页面中使用的数据
  async getCategoryData() {
    // 调用接口获取分类的数据
		const res = await reqCategoryData()

    console.log(res);
    this.setData({
      categoryList: res.data
    })
  },

  // 导航分类点击事件
  // coding...
})
