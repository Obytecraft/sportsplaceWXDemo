import fetch from '../../utils/fetch.js'

const getPlaceByBounds = (sw, ne, obj={}) => {
  fetch.request(`/place?sw=${sw}&ne=${ne}`)
}

const getPlacebyOrigin = (origin, radius, obj={}) => {
  fetch.request(`/places?origin=${origin}&radius=${radius}`)
}

// filter based on sports
// const getPlaceByOriginSports = (origin, radius, sport, obj={}) => {
//   fetch.request
// }
export default {

  
}