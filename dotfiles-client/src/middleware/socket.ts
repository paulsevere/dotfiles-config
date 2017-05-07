import { green } from '../logger/colorLog'

var socket = new WebSocket("ws://localhost:8080");
export const socketMiddleware = (store: Redux.Store<any>) => (next: Function) => (action: Command) => {
  if (action.meta === 'SOCKET_DISPATCH') {
    socket.send(JSON.stringify(action))
    return next({ type: 'SOCKET_ACTION' })
  } else {
    return next(action)
  }
};

export const socketListener = (store: Redux.Store<any>): Redux.Store<any> => {
  socket.addEventListener("message", ({ data }) => {
    try {
      let action = JSON.parse(data);
      green(action.type, action)
      store.dispatch(action)
    } catch (err) {

      store.dispatch({ type: 'ERROR', payload: err })
    }
  })
  return store
}
