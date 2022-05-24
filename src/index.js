// first push

import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './SignInAndSignUp';
import Expenses from './routes/expenses.jsx';

const rootElement = document.getElementById("root");
render( 
<HashRouter>
      <Routes>
        <Route  path='/' element={<SignInAndSignUpPage/>}/>
        <Route path='expenses' element={<h1>test</h1>} />
      </Routes> 
</HashRouter>,
rootElement
);