import * as React from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import FileList from './Files'

console.log(store)

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
