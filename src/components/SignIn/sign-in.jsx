import React from 'react';
import './sign-in.css'
import { Link, Navigate} from "react-router-dom";
import axios from 'axios'

function SignIn({user, updateUser, cartId, updateCartId, userId, updateUserId}) {
    let object;
    function signIn(){
        let username = document.getElementById("user").value;
        let password = document.getElementById('pass').value;
        let obj = {"username" : username, "password" : password}
        //console.log(obj)
        if (username.length && password.length){
        axios.post('/auth/login', obj)
        .then(res => { console.log(res); if (res.status === 201) object = res.data })
        .then(() => {
            updateCartId(object.cart_id);
            updateUserId(object.user_id);
            updateUser(username);
            console.log('test');
            return;
        })
        
        .catch(err => console.log(err))
            }
        }   
        //return (<Navigate to={"store"}/>
    if (user != '') {console.log(cartId)} 
    return(
     <div className= 'containerSignIn'>
         <h1 id = 'signIn'>Sign In</h1>
         <input id ='user' placeholder = 'username' type="text" />
         <input id = "pass" placeholder = 'password' type="password" />
         <h1 id = 'error'></h1>
         <button id = 'signInButton' onClick={() => signIn()}>Submit</button>
         
     </div>   
    )
}


export default SignIn;
