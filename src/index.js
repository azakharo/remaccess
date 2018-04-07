import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './css/index.css'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { withRouter, Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'

import history from './history'
import rootReducer from './reducers'
import rootSaga from './sagas/index.js'

import App from './components/app'

import OrderList from './components/order/list'
import QuoteList from './components/quote/list'
import TestAssignment from './components/test'

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      logger,
      sagaMiddleware
    ),
    autoRehydrate()
  )
)

persistStore(store, {blacklist: ['sessionKeyIsUpdating']})

sagaMiddleware.run(rootSaga)

const AppRoute = withRouter(App)

render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoute>
        <Switch>
          <Route exact path="/" component={TestAssignment} />
          <Route exact path="/orders" component={OrderList} />
          <Route exact path="/quotes" component={QuoteList} />
        </Switch>
      </AppRoute>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
