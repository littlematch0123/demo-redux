// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import MathContainer from './containers/MathContainer'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <MathContainer />
  </Provider>,
  document.getElementById('root')
)
