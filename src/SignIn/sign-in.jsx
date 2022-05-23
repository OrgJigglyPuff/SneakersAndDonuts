import React from 'react';
import './sign-in.css'
function SignIn() {
    return(
     <div className= 'containerSignIn'>
         <h1>sign in</h1>
         <input id ='username' placeholder = 'username' type="text" />
         <input id = "password" placeholder = 'password' type="password" />
         <button>Submit</button>
     </div>   
    )
}


export default SignIn;
