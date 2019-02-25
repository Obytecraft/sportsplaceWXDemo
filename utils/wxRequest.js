import wepy from 'wepy'
// import apiConfig from '../config/apiConfig.js'
import tip from './tip'

const defaultHeader = {
  'content-type': 'application/json'
}

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    header: defaultHeader
  })
  tip.loaded()
  // console.log(res.data)
  return res
}

module.exports = {
  wxRequest
}
