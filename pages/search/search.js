import  apiUrl  from '../../config/apiConfig'
Page({
  /**
   * Page initial data
   */
  data: {
    sports: [],
    sportsID: '',
    page: 1,
    filteredSport: [],
    inputsearch: ''
  },



  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.fetchSportsData()
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

  loadMoreData: function () {
    this.showLoading()
    this.setData({
      page: ++this.data.page
    })
    this.fetchSportsData()
  },

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
        // console.log(res)
        if (res.statusCode == 200) {
          
          this.hideLoading()
        } else {
          this.showToast('Sorry! Network Issue')
        }
        sports = res.data ? res.data : []
        console.log(sports)
        this.setData({
          sports
        })
      },
      fail: (err) => {
        this.showToast(err.errMsg)
      },
    })
  },


  toChild: function (e){
    wx.navigateTo({
          url: '../place/place?id=' + e.currentTarget.dataset.id
          // use value of selected sport to search for the place
        },
    )
    // console.log(e.currentTarget.dataset.id)
    let sportsID = e.currentTarget.dataset.id
    wx.setStorage({key:'selectedSportID', data:sportsID})
  },

// search function
  search: function (e) {
    let that = this
    let filteredSport = this.data.sports

    let inputValue = e.detail.value
    // let searchSports = this.sports.filter()
    
    that.setData({
      inputValue
    })
    console.log(inputValue)
    // console.log(filteredSport)
    // filter function 
    // let filterPlace = this.data.places
    // function filter (filterPlace, inputValue) {
    //   var res =""
    //     for (var j = 0; j<filterPlace.length; j++) {
    //       if (filterPlace[j].match (inputValue)){
    //         res = res+filterPlace[j]
    //       }
    //     }
    //     return res
    // }
    
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