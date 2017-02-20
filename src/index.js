import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {
  indexRoute,
  Link,
  Route,
  Router,
  browserHistory
} from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import App from './components/App'
import CreateRecord from './components/CreateRecord'

import records from './reducers/records'

const reducer = combineReducers({
    records,
    routing: routerReducer,
    form: reduxFormReducer
  })

const composeEnchanters = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = routerMiddleware(browserHistory)

const store = createStore(
  reducer,
  composeEnchanters(
    applyMiddleware(middleware)
  )
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider {...{store}}>
    <Router {...{history}}>
      <Route path="/" component={App}>
        <Route path="create" component={CreateRecord} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
