import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

// Make sure the reducer is defined or imported here
import reducer from './reducer' // Adjust path if needed

const middleware = {thunk} // Array of middlewares

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware correctly
)

export default store
