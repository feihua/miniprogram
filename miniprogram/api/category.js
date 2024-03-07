// 导入封装的网络请求模块实例
import http from '../utils/http'

/**
 * @description 获取商品分类的数据
 * @returns Promise
 */
export const reqCategoryData = () => {
  return http.get('/api/category/queryProductCateList')
}