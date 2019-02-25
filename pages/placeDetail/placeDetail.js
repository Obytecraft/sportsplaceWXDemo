// pages/placeDetail/placeDetail.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  
  BookPlace: function(e) {
    wx.showModal({
      title: 'Available Soon',
      content: 'Booking Service is not available',
      confirmText: 'Okay',
      // cancelText: 'Cancel',
      confirmColor: '#3880be',
      // cancelColor: '#3880be',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          console.log('Confirm')
        } else if (res.cancel) {
          console.log('Cancel')
        }
      }
    })
  },
  makeCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: '1340000'
    })
  },

  getDirection: function(e) {
    wx.showModal({
      title: 'Get Direction',
      // content: 'Click Okay to get direction',
      confirmText: 'Okay',
      cancelText: 'Cancel',
      cancelColor: '#3880be',
      success(res) {
        if (res.confirm) {
          console.log('Confirm')
          wx.getLocation({
            type: 'gcj02',
            success(res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude,
                longitude,
                scale: 18
              })
            }
          })
        } else if (res.cancel) {
          console.log('Cancel')
        }
      }
    })
  }
})