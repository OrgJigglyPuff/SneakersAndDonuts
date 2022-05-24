// first push

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Footer from './components/Footer/footer'
import Expenses from './routes/expenses.jsx';
import App from './App.jsx';

const rootElement = document.getElementById("root");
render( 
<App />
,
rootElement
);