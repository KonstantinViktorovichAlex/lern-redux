import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

// function loggerMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action)
//             console.log('MIDDLEWARE', store.getState())
//             return result
//         }
//     }
// }

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('MIDDLEWARE', store.getState())
    return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk))




const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

