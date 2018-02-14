// actions/math.js
import { ADD, SQUARE, SET } from '../constants/ActionTypes'
import { startFetch, successFetch, failFetch, hideFetchMessage } from './fetch'
import axios from 'axios'
const uri = 'https://jsonplaceholder.typicode.com/posts/2'
export const add = num => ({ type: ADD, num })
export const square = { type: SQUARE }
export const setNum = () => (dispatch, getState) => {
  dispatch(startFetch)
  setTimeout(() => {dispatch(hideFetchMessage)}, 300)
  return axios
    .get(uri)
    .then(res => {
      dispatch(successFetch)
      setTimeout(() => {dispatch(hideFetchMessage)}, 300)
      dispatch({ type: SET, num: res.data.id })
    })
    .catch(err => {
      dispatch(failFetch)
      setTimeout(() => {dispatch(hideFetchMessage)}, 300)
    })
}
