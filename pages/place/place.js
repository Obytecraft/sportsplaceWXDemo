import apiUrl from '../../config/apiConfig'

// pages/place/place.js
Page({

  /**
   * Page initial data
   */
  data: {
    active: 0,
    places: [],
    sport: '',
    distance: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

    var that = this
    // variables
    let places = []
    let lat = -73.582
    let long = 45.511
    let origin = lat + ',' + long
    let radius = 99
    // let sportID = ''
    
    // get sports Id from localStorage.
    let sportID =  wx.getStorageSync('selectedSportID')

    this.places = wx.request({
      loading: this.showLoading(),
      url: apiUrl.BASEURL + `/places?origin=${origin}&radius=${radius}&sports=${sportID}`,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode == 200) {
          this.hideLoading()
        } else {
          this.showToast('Sorry! Network Issue')
        }
        places = res.data.data.features
        console.log(places)
        this.setData({
          places
        })
      },
      fail: (err) => {
        this.showToast(err.errMsg)
      },
      complete: (res) => { 
        // if
      }
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

  toChild: function (e) {
    wx.navigateTo({
      url: '../placeDetail/placeDetail?id=' + e.currentTarget.dataset.id
    },
    )
    let placeId = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
    wx.setStorage({
      key: 'placeId',
      data: placeId,
    })
  },

  showLoading: function () {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
  },

  hideLoading: function () {
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  showToast: function (title) {
    wx.showToast({
      title: title || 'Sorry, there has been a network issue, Please try again later',
      icon: 'none',
      duration: 1500
    })
  }

})