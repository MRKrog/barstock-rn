import React, { Component } from 'react';

import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainDisplay from './containers/MainDisplay/MainDisplay';

const store = createStore(
  rootReducer
)

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainDisplay />
      </Provider>
    );
  }
}

export default App;
