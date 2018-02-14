// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import MathContainer from './containers/MathContainer'
import { Provider } from 'react-redux'
import {Router,Route} from 'react-router-dom'
import history from './utils/history'
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MathContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
