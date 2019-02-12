import fetch from '../../utils/fetch'

const getPlaceByBounds = (sw, ne, sports, obj = {}) => {
  fetch.request(`/places?sw=${sw}&ne=${ne}&sports=${sports}`,obj)
}

const getPlaceByOrigin = (origin, radius, sports, obj={}) => {
  fetch.request(`/places?origin=${origin}&radius=${radius}&sports${sports}`,obj)
}
// const getSportDetails = (SPORT_ID, obj = {}) => {
//   fetch.request(`/sports/${SPORT_ID}`, obj)
// }

export default {
  getPlaceByBounds,
  getPlaceByOrigin
}