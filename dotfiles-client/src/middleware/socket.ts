var socket = new WebSocket("ws://localhost:8080");
export default (store: Redux.Store<any>) => (next: Function) => (action: Command) => {
  console.log(socket)

  socket.send(JSON.stringify(action));
  socket.onmessage = e => console.log(e)
  // console.log("next state", store.getState());
  return next(action)
};
