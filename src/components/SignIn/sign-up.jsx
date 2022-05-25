import React, { useEffect, useState } from 'react';
import './sign-up.css'
import { Link, Navigate} from "react-router-dom";
import axios from 'axios'

function SignUp({user, updateUser}) {
//const [user, updateUser] = useState('')
    function createAccount(){
        let username = document.getElementById('userSignUp').value;
        let email = document.getElementById('emailSignUp').value;
        let password = document.getElementById('passSignUp').value;
        let obj = {"username" : username, "email" : email, "password" : password}
        
        if (username.length && email.length && password.length){
        axios.post('/auth', obj)
        .then(res=> {if (res.status === 201) {updateUser(username)}})
        .catch(err => console.log(err))
            }
        }   
    if (user != '') return (<Navigate to={"store"}/>)
    return(
     <div className = 'signUpDiv'>
         <h1 id = 'signUp'>Sign Up</h1>
         <input id ='userSignUp' placeholder = 'username' type="text" />
         <input id ='emailSignUp' placeholder = 'email' type="text" />
         <input id = "passSignUp" placeholder = 'password' type="password" />
         {/* <h1 value = {user}></h1> */}
         
         
         {/* <Link to="/expenses"> */}
         <button id = 'signUpButton' onClick={() => createAccount()}>Submit</button>
         {/* </Link> */}
         
         
         
     </div>   
    )
}


export default SignUp;