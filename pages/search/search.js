import apiUrl from '../../config/apiConfig'

const app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {
    sports: [],
    newSport: [],
    sportsID: '',
    filteredSport: [],
    inputsearch: ''
  },

  onPageScroll: function(event) {

  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.fetchSportsData()
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

  // loadMoreData: function () {
  //   this.showLoading()
  //   this.setData({
  //     page: ++this.data.page
  //   })
  //   this.fetchSportsData()
  // },

  fetchSportsData: function() {
    let that = this;
    let sports = []
    this.sports = wx.request({
      loading: this.showLoading(),
      url: apiUrl.BASEURL + '/sports',
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
        sports = res.data ? res.data : []
        let newSport = sports;
        this.setData({
          sports,
          newSport: sports
        })
      },
      fail: (err) => {
        this.showToast(err.errMsg)
      },
    })
  },


  toChild: function(e) {
    wx.navigateTo({
      url: '../place/place?id=' + e.currentTarget.dataset.id
    }, )
    let sportsID = e.currentTarget.dataset.id
    wx.setStorage({
      key: 'selectedSportID',
      data: sportsID
    })
  },

  // search function
  searchSport: function(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.newSport;
    let newlist = [];
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        newlist.push(list[i])
      }
    }
    this.setData({
      sports: newlist
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