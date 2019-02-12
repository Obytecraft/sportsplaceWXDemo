import sportAPI from './modules/sports'
import placeAPI from './modules/place.js'

export default {
  ...sportAPI,
  ...placeAPI
}