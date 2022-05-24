import React from 'react';
import './sign-up.css'
import { Link } from "react-router-dom";

function SignUp() {
    return(
     <div className = 'signUpDiv'>
         <h1>sign Up</h1>
         <input id ='username' placeholder = 'username' type="text" />
         <input id = "password" placeholder = 'password' type="password" />
         
         <nav>
         <Link to="/expenses">
         <button>Submit</button>
         </Link>
         </nav>
     </div>   
    )
}


export default SignUp;