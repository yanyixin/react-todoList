import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './components/Main';
import taskStore from './stores'

let store = createStore(taskStore);
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
