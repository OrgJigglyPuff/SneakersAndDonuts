import React, { useEffect, useState } from 'react';
import { Link, Navigate} from "react-router-dom";
import axios from 'axios'

function SignUp({user, updateUser, cartId, updateCartId, userId, updateUserId}) {
//const [user, updateUser] = useState('')
let object;

    function createAccount(){
        let username = document.getElementById('userSignUp').value;
        let email = document.getElementById('emailSignUp').value;
        let password = document.getElementById('passSignUp').value;
        let obj = {"username" : username, "email" : email, "password" : password}

        if (username.length && email.length && password.length){
        axios.post('/auth', obj)
        .then(res => {if (res.status === 201) object = res.data })
        .then(() => {
            updateCartId(object.cart_id);
            updateUserId(object.user_id);
            updateUser(username);
            return;
        })

        .catch(err => console.log(err))
            }
        }
    if (user != '') { console.log('userid:', userId + ' cartId: ', cartId);
        return (<Navigate to={"store"}/>) }

    return (
    //  <div className = 'signUpDiv'>
    //      <h1 id = 'signUp'>Sign Up</h1>
    //      <input id ='userSignUp' placeholder = 'username' type="text" />
    //      <input id ='emailSignUp' placeholder = 'email' type="text" />
    //      <input id = "passSignUp" placeholder = 'password' type="password" />
    //      <button id = 'signUpButton' onClick={() => createAccount()}>Submit</button>
    //      {/* </Link> */}
    //  </div>
    <div className="register">
    <h2 className="text-2xl mb-6">Register</h2>
    <div className="display_name flex border rounded text-gray-500 mb-4">
      <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="username" id="userSignUp" />
    </div>

    <div className="username flex border rounded text-gray-500 mb-4">
      <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="email" id="emailSignUp" />
    </div>

    <div className="password flex border rounded text-gray-500 mb-4">
      <input className="outline-none px-4 h-full py-2 text-lg" type="password" placeholder="password" id="passSignUp" />
    </div>

    {/* <div className="show_info text-sm mb-4 w-max text-red-400">username already taken</div> */}
    <div className="submit border rounded mb-4 bg-violet-500 text-white cursor-pointer">
      <div className="wrapper flex w-max mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
        <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Register" id="signUpButton" onClick={() => createAccount()} />
      </div>
    </div>
  </div>
  )
}


export default SignUp;