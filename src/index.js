// import './wdyr'; // why did you re-render
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
// import { createLogger } from 'redux-logger'; // with looger
import 'tachyons';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers';

import './index.css';

const rootReducer = combineReducers({ requestRobots, searchRobots });

// const logger = createLogger(); // with looger
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger)); // with looger

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare)); // without looger

// const store = createStore(
//   searchRobots, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// ); // with redux dev tools

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
