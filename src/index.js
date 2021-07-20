import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const BillStore = createStore(reducer);

ReactDOM.render(
  <Provider store={BillStore}>
    <App />
  </Provider>,
  document.getElementById('root'))


serviceWorker.register();
