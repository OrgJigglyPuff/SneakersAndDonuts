
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Cart from './pages/Cart';
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

function App() {

let header;
let footer;
const [user, updateUser] = useState('')
const [cart, updateCart] = useState({total : 0, items: []})
const [cartId, updateCartId] = useState('')
const [userId, updateUserId] = useState('')

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
          <Route  path='/' element={<SignInAndSignUpPage user = {user} updateUser = {updateUser} cartId ={cartId} updateCartId = {updateCartId} userId ={userId} updateUserId = {updateUserId}/>}/>
          <Route path='store' element={<Store user = {user} id = {cartId}/>} />
          <Route path='cart' element={<Cart user = {user} id ={cartId}/>} />
          <Route path='cart/checkout' element={<Checkout id ={cartId}/>} />
          <Route path='/cart/checkout/confirmation' element={<Confirmation />} />
        </Routes>
        {footer}
        </HashRouter>
    );
  }

export default App;
