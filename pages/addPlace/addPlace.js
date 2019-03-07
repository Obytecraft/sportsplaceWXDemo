// pages/addPlace/addPlace.js
Page({

  /**
   * Page initial data
   */
  data: {
    sportData: [],
    // picker,
    index: null
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  sportListModal(e) {
    this.setData({
      sportModal: e.currentTarget.dataset.target
    })
  },

  hideSportListModal(e) {
    this.setData({
      sportModal: null
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  pickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    let sportList = wx.getStorageSync('sportsList')
    console.log(sportList)
    this.setData({
      sportList
    })
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
  addPlace: function() {
    wx.showModal({
      title: 'Not Available',
      content: 'This feature will be available soon.',
      showCancel: false,
      confirmText: 'Okay',
      confirmColor: '#3880be',
      success: (res) => {
       wx.switchTab({
         url: '../search/search',
       })
      }
    })
  }
})