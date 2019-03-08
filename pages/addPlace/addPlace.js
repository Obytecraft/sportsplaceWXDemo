// pages/addPlace/addPlace.js
Page({

  /**
   * Page initial data
   */
  data: {
    sportData: [],
    // src: [],
    // picker,
    index: null,
    TabCur: 0,
    tabNav: ['Basic Details', 'More'],
    time: '12:01',
    imageList: []
  },

  //  for time picker
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  tabSelect(e) {
    // console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  showModal(e) {
    // let 
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


  getImages: function() {
    var that = this
    wx.chooseImage({
      count: 3,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        // var tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths)
        // wx.setStorageSync('images', tempFilePaths)
        that.setData({
          imageList: res.tempFilePaths
        })
      },
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var that = this
    let sportList = wx.getStorageSync('sportsList')
    // console.log(sportList)
    this.setData({
      sportList
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

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