import React, { useEffect, useState } from 'react';
import './sign-up.css'
import { Link, Navigate} from "react-router-dom";
import axios from 'axios'

function SignUp({user, updateUser}) {
//const [user, updateUser] = useState('')
    function createAccount(){
        let username = document.getElementById("user").value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        let obj = {"username" : username, "email" : email, "password" : password}
        axios.post('/auth', obj)
        .then(res=> {if (res.status === 201) {updateUser(username)}})
        
    }
    if (user != '') return (<Navigate to={"expenses"}/>)
    return(
     <div className = 'signUpDiv'>
         <h1>sign Up</h1>
         <input id ='user' placeholder = 'username' type="text" />
         <input id ='email' placeholder = 'email' type="text" />
         <input id = "pass" placeholder = 'password' type="password" />
         <h1 value = {user}></h1>
         
         <nav>
         {/* <Link to="/expenses"> */}
         <button onClick={() => createAccount()}>Submit</button>
         {/* </Link> */}
         
         </nav>
         
     </div>   
    )
}


export default SignUp;