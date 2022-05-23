import React from 'react'
//import './sign-in-and-sign-up.styles.scss'
import SignInForm from './SignIn/sign-in.jsx'
import SignUpForm from './SignIn/sign-up.jsx'
export default function SignInAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
           <h3>test 3</h3>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
