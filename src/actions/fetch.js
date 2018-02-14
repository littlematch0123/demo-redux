// actions/fetch.js
import { SET_FETCH_MESSAGE, HIDE_FETCH_MESSAGE } from '../constants/ActionTypes'
export const startFetch = { type: SET_FETCH_MESSAGE,message: '开始发送异步请求' }
export const successFetch = { type: SET_FETCH_MESSAGE, message: '成功接收数据' }
export const failFetch = { type: SET_FETCH_MESSAGE, message: '接收数据失败' }
export const hideFetchMessage = { type: HIDE_FETCH_MESSAGE }
