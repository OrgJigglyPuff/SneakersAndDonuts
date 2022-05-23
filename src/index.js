// first push

import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
//import { createStore } from 'redux';
import App from './App.jsx';

//const store = createStore('../reducers/index')

render(
<BrowserRouter>
<h1>test 2</h1>
  <App/>

</BrowserRouter>,
document.querySelector('#root')
);