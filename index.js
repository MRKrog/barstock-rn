import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import App from './src/App';

import { rootReducer } from './src/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
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
