// import fetch from './utils/fetch.js'
// import api from './api/index'
import {
  localStorage
} from './utils/util.js'

App({
  onLaunch: function() {

    wx.getStorage({
      key: 'userInfo',
      success: res => {
        this.globalData.userInfo = res.data
        console.log(res)
        wx.switchTab({
          url: 'pages/search/search',
        })
      },
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      }),
    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
  },
  globalData: {
    userInfo: null,
  }
})