// reduces/math.js
import { ADD, SQUARE,SET } from '../constants/ActionTypes'
const math = (state = 10, action) => {
  switch (action.type) {
    case ADD:
      return state + action.num
    case SQUARE:
      return state * state
    case SET:
      return action.num
    default:
      return state
  }
}
export default math
