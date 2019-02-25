/**
 * tips and loading tools
 */
export default class Tips {
  constructor() {
    this.isLoading = false
  }
  /**
   * Pop-up prompt box.
   */

  static success(title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      })
    }, 300)
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

  /**
   * Pop-up confirmation box
   */
  static confirm(text, payload = {}, title = 'Prompt') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.cancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }

  static toast(title, onHide, icon = 'success') {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      })
    }, 300)

    // hide and end callback
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  /**
   * Warning box
   */
  static alert(title) {
    wx.showToast({
      title: title,
      image: '../images/alert.png',
      mask: true,
      duration: 1500
    })
  }

  /**
   * error box
   */

  static error(title, onHide) {
    wx.showToast({
      title: title,
      image: '../images/error.png',
      mask: true,
      duration: 500
    })
    // hide and end callback
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  /**
   * Pop-up loading tips
   */
  static loading(title = 'loading') {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
  }

  /**
   * load completed
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false
      wx.hideLoading()
    }
  }

  static share(title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: function(res) {
        Tips.toast('分享成功')
      }
    }
  }
}

/**
 * Static variable, whether it is loading
 */
Tips.isLoading = false
