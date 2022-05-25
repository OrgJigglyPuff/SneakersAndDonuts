import React from 'react';
import './sign-in.css'
import { Link, Navigate} from "react-router-dom";
import axios from 'axios'

function SignIn({user, updateUser}) {

    function signIn(){
        let username = document.getElementById("user").value;
        let password = document.getElementById('pass').value;
        let obj = {"username" : username, "password" : password}
        //console.log(obj)
        axios.post('/auth/login', obj)
        .then(res=> {if (res.status === 201) {updateUser(username)}})
        .catch(()=> {
            document.getElementById('error').innerText = "incorrect loggin"
        })
         //.then(res=> console.log(res))
        if (user != '') return (<Navigate to={"store"}/>)
        
    }

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
