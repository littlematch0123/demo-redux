// reducers/fetch.js
import { SET_FETCH_MESSAGE,HIDE_FETCH_MESSAGE } from '../constants/ActionTypes'
const initState = {
  message:'',
  isShow:false
}
const fetch = (state = initState, action) => {
  switch (action.type) {
    case SET_FETCH_MESSAGE:
      return {isShow: true, message: action.message}
    case HIDE_FETCH_MESSAGE:
      return { isShow: false, message: '' }
    default:
      return state
  }
}
export default fetch
