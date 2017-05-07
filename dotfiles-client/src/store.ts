import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers'
import { socketListener, socketMiddleware } from './middleware/socket'


export default socketListener(createStore(combineReducers(reducers),
    applyMiddleware(socketMiddleware)))


