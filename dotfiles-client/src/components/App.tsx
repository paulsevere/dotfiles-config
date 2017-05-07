import * as React from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import FileList from './Files'

window.util = {
  dispatch: store.dispatch,
  getState: store.getState
}
class App extends React.Component<{}, null> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FileList />
        </div>
      </Provider>
    );
  }
}

export default App;
