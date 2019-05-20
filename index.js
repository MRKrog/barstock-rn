import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import App from './src/App';

import { rootReducer } from './src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer
)

import {name as appName} from './app.json';


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppRegistry.registerComponent(appName, () => Root);
