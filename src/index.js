import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {
  IndexRoute,
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
import EditRecord from './components/EditRecord'
import ListRecords from './components/ListRecords'

import records from './reducers/records'

const initialState = {
  maxId: 2,
  records: {
    '0': {
      firstName: 'Jonh',
      lastName: 'Doe',
      email: 'johndoe@foo.net',
      phone: '(555)-555-5555',
      sex: 'male',
      favoriteColor: 'ff0000',
      employed: false,
      notes: 'Some important notes.'
    },
    '1': {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@bar.net',
      phone: '(333)-333-3333',
      sex: 'female',
      favoriteColor: '00ff00',
      employed: true,
      notes: 'Some significant notes.'
    }
  }
}

const reducer = combineReducers({
    records,
    routing: routerReducer,
    form: reduxFormReducer
  })

const composeEnchanters = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = routerMiddleware(browserHistory)

const store = createStore(
  reducer,
  { records: initialState },
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
        <Route path="edit/:id" component={EditRecord} />
        <IndexRoute component={ListRecords} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
