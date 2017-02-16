import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './Reducers'
import {
  reducer as FormReducer,
} from 'redux-form'
import {
  routerReducer,
} from 'react-router-redux'

const middlewares = [
  thunk,
]

/* middlewares to use in dev */
if (process.env.NODE_ENV !== 'production') {
  /* Redux logger only in dev */
  // eslint-disable-next-line
  const createLogger = require('redux-logger')

  const logger = createLogger({ collapsed: true, })
  middlewares.push(logger)
}

const Reducers = combineReducers({
  app: AppReducer,
  form: FormReducer,
  routing: routerReducer,
})

const appliedMiddlewares = applyMiddleware(...middlewares)

const Store = createStore(
  Reducers,
  {},
  appliedMiddlewares,
)

export default Store
