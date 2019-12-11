import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";

// Bootstrap and custom css
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from "./store/index";
import Routes from "./routes";

ReactDOM.render(
 <BrowserRouter>
  <Provider store={store}>
   <Routes />
  </Provider>
 </BrowserRouter>,
 document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
