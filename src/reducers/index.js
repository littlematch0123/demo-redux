// reducers/index.js
import { combineReducers } from 'redux'
import math from './math'
import fetch from './fetch'
const rootReducer = combineReducers({
  math,
  fetch
})

export default rootReducer