// first push
import React, { Component } from 'react';
//import './App.css';
import { Route, Routes, Redirect, Router } from 'react-router-dom';
import SignInAndSignUpPage from './SignInAndSignUp';


const App= () =>
(
  <div className='app'>
    
      <SignInAndSignUpPage />
    <Router>
      <Routes>
        <Route path='/' element={<SignInAndSignUpPage/>} />
        {/* <Route path='/test' element={} /> */}
      </Routes>
    </Router>
    </div>
)




export default App;