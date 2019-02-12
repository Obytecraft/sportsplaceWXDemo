import fetch from '../../utils/fetch'

const getSportList = (obj ={}) => {
  fetch.request('/sports', obj)
}

const getSportDetails = (SPORT_ID, obj ={}) => {
  fetch.request(`/sports/${SPORT_ID}`, obj)
}

export default {
  getSportList,
  getSportDetails
}