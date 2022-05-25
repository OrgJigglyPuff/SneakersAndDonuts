import React from 'react';
import './sign-in.css'
function SignIn() {
    return(
     <div className= 'containerSignIn'>
         <h1 id = 'signIn'>Sign In</h1>
         <input id ='username' placeholder = 'username' type="text" />
         <input id = "password" placeholder = 'password' type="password" />
         <button id = 'signInButton'>Submit</button>
     </div>   
    )
}


export default SignIn;
