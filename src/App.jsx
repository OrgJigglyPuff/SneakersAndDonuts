
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Expenses from './routes/expenses.jsx';

function App() {
    
const [user, updateUser] = useState('')
const [cart, updateCart] = useState({total : 0, items: []})
const id = '628cf0e6f91da7d772f6d858'

//to add to cart, send price, shopping cart id, and item
console.log(user)

    return (
        <HashRouter>
          <Header />
        <Routes>
          <Route  path='/' element={<SignInAndSignUpPage user = {user} updateUser = {updateUser} />}/>
          <Route path='expenses' element={<Store user = {user} id = {id}/>} />
        </Routes> 
        <Footer />
        </HashRouter>
    );
  }
  
  export default App;