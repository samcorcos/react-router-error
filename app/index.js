import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'
import {
  Provider,
} from 'react-redux'
import {
  syncHistoryWithStore,
} from 'react-router-redux'
import Store from './redux/Store'

import App from './App'
import Home from './modules/Home'

const history = syncHistoryWithStore(browserHistory, Store)

const Routes = (
  <Provider store={Store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(Routes, document.getElementById('root'))
