import apiUrl from '../../config/apiConfig'

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var that = this
    // variables
    let places = []
    let long = -73.582
    let lat = 45.511
    let origin = long + ',' + lat
    let radius = 99

    // get sports Id from localStorage.
    let index = wx.getStorageSync('placeId')
    let sportID = wx.getStorageSync('selectedSportID')

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
        let sportImage = places[index].properties.activities
        let tags = places[index].properties.activities
        let distance = Math.round(places[index].properties.proximity)
        let dismetres = (places[index].properties.proximity * 1000).toFixed(2)
        this.setData({
          places: places[index],
          distance,
          dismetres,
          sportImage,
          tags,
        })
      },
      fail: (err) => {
        this.showToast(err.errMsg)
      },
      complete: (res) => {}
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
  BookPlace: function(e) {
    wx.showModal({
      title: 'Available Soon',
      content: 'Booking Service will be out soon',
      confirmText: 'Okay',
      // cancelText: 'Cancel',
      confirmColor: '#3880be',
      // cancelColor: '#3880be',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          wx.switchTab({
            url: '../search/search'
          })
          console.log('Confirm')
        }
      }
    })
  },
  makeCall: function(e) {
    let number = this.data.places.properties.contact_details.phone
    if (number != null) {
      wx.makePhoneCall({
        phoneNumber: number
      })
    } else {
      wx.showModal({
        title: 'Unavailable',
        content: 'No phone number available',
        confirmColor: '#3880be',
        showCancel: false,
        confirmText: 'Okay'
      })
    }
    // console.log(number)

  },

  getDirection: function(e) {
    wx.showModal({
      title: 'Get Direction',
      confirmText: 'Okay',
      cancelText: 'Cancel',
      cancelColor: '#3880be',
      confirmColor: '#3880be',
      success(res) {
        if (res.confirm) {
          wx.getLocation({
            type: 'gcj02',
            success: function(res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude: latitude,
                longitude: longitude,
                scale: 18
              })
            },
          })
        } else if (res.cancel) {
          console.log('Cancel')
        }
      }
    })
  },

  showLoading: function() {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
  },

  hideLoading: function() {
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  showToast: function(title) {
    wx.showToast({
      title: title || 'Sorry, there has been a network issue, Please try again later',
      icon: 'none',
      duration: 1500
    })
  }
})