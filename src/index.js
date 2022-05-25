import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Footer from './components/Footer/footer'
import Expenses from './routes/expenses.jsx';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);