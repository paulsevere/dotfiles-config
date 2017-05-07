import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers'
import socket from './middleware/socket'


export default createStore(combineReducers(reducers),
    applyMiddleware(socket))


