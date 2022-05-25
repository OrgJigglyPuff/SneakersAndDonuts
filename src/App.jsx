
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Expenses from './routes/expenses.jsx';

function App() {

let header;
let footer;
const [user, updateUser] = useState('')
const [cart, updateCart] = useState({total : 0, items: []})
const id = '628cf0e6f91da7d772f6d858'

if (user){
  header = <Header user = {user}/>;
  footer = <Footer />
}
else {
  header = undefined;
  footer=undefined;
}

//to add to cart, send price, shopping cart id, and item

    return (
        <HashRouter>
          {header}
        <Routes>
          <Route  path='/' element={<SignInAndSignUpPage user = {user} updateUser = {updateUser} />}/>
          <Route path='store' element={<Store user = {user} id = {id}/>} />
        </Routes> 
        {footer}
        </HashRouter>
    );
  }
  
  export default App;