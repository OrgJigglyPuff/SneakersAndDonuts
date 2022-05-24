
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Route, Routes, HashRouter, } from 'react-router-dom';
import SignInAndSignUpPage from './pages/SignInAndSignUp';
import Store from './pages/store';
import Footer from './components/Footer/footer'
import Expenses from './routes/expenses.jsx';

function App() {
    
const [user, updateUser] = useState('')
console.log(user)

    return (
        <HashRouter>
        <Routes>
          <Route  path='/' element={<SignInAndSignUpPage user = {user} updateUser = {updateUser} />}/>
          <Route path='expenses' element={<Store user = {user}/>} />
        </Routes> 
        <Footer />
        </HashRouter>
    );
  }
  
  export default App;