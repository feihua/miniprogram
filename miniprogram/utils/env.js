// 就是配置当前小程序项目的环境变量

// 获取当前小程序的账号信息
const { miniProgram } = wx.getAccountInfoSync()

// 获取小程序的版本
const { envVersion } = miniProgram

let env = {
  baseURL: 'http://110.41.179.89/app'
}

switch (envVersion) {
  // 开发版
  case 'develop':
    env.baseURL = 'http://110.41.179.89/app'
    break

  // 体验版
  case 'trial':
    env.baseURL = 'http://110.41.179.89/app'
    break

  // 正式版
  case 'release':
    env.baseURL = 'http://110.41.179.89/app'
    break

  default:
    env.baseURL = 'http://110.41.179.89/app'
    break
}

export { env }
