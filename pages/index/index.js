// import fetch from '../../utils/fetch.js' 
//index.js
//to get the instance of the app. 
const app = getApp()

Page({
  data: {
    active: 0,
    sports: []
  },

  // this is the event handler
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onChange(event) {
    // wx.switchTab()
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    //this.getSports();
    }
  },

  // get all sports 
  getSports(){
    wx.$api.getSportList({
      loading: true,
      method: 'GET',
      dataType: 'json',
      success: res => {
        // JSON.stringify(res)
        console.log(res)
        let sports = res ? res : []
        this.setData({
          sports
        })
      }
    })
  },


  //get a place 
  getPlaceByOrigin(){},
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
