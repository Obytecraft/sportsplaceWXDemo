import apiConfig from '../config/apiConfig.js'

const defaultHeader = {
  'content-type': 'application/json'
}

class Fetch {
  // constructor to create new instance
  constructor() {
    this.baseUrl = apiConfig.BASEURL
  }

  request(url, config = {}) {
    // Show loading animation
    if (config.loading) {
      _Util.showLoading()
    }

    // make method default
    config.method = config.method ? config.method : 'get'

    // url
    let resUrl = `${this.baseUrl}${url}`

    wx.request({
      url: resUrl,
      data: config.data,
      header: { ...defaultHeader },
      method: config.method,
      // dataType: 'json',
      success: res => {
        console.log(res.data)
        let response = res.data
        if (response.status === 200) {
          // console.log(response)
          config.loading && _Util.hideLoading()
          config.success && config.success(response)
        } else {
          _Util.showToast('Sorry! Network issue')
        }
      },
      fail: err => {
        config.fail && config.fail(err)
        _Util.showToast(err.errMsg)
      },
      complete: function (res) { }
    })
  }
}
const _Util = {
  showLoading() {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
  },

  hideLoading() {
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  showToast(title) {
    wx.showToast({
      title: title || 'Sorry, there has been a network issue, Please try again later',
      icon: 'none',
      duration: 1500
    })
  }
}
export default new Fetch()
