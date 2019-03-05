// import fetch from './utils/fetch.js'
// import api from './api/index'
import {
  localStorage
} from './utils/util.js'

// wx.$api = api
//app.js
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
        // this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
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
      //not sure about this.
      // wx.getLocation({
      //   type: 'wgs84',
      //   success: function (res) {
      //     var lat = res.latitude
      //     var long = res.longitude
      //   },
      // })
      // 获取用户信息
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
            // wx.getLocation({
            //   type: 'gcj02',
            //   success: function(res) {
            //     this.globalData.userLocation = res.userLocation

            //   },
            // })
          }
        }
      })
  },
  globalData: {
    userInfo: null,
    // userLocation: null,
    // userAddress: null
    // userLocation: null
  }
})