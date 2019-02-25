import apiUrl from '../config/apiConfig'

const api = {
  sports: {
    method: 'GET',
    url: '/sports'
  }
}

module.exports = {
  api: disposeUrl(api, apiUrl.BASEURL)
}
function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      obj[v] = disposeUrl(obj[v], prefix)
    }
  })

  return obj
}
