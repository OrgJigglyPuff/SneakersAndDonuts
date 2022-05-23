// first push
import React, { Component } from 'react';
//import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './SignInAndSignUp';

const App= () =>
(
  <div className='app'>
    <h1>test</h1>
      <SignInAndSignUpPage />
      {/* <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
      </Switch> */}
    </div>
)




export default App;