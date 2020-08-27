import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())



export default store
