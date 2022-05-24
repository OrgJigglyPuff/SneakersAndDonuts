import React from 'react'
import './SignInAndSignUp.css'
import SignInForm from '../components/SignIn/sign-in.jsx'
import SignUpForm from '../components/SignIn/sign-up.jsx'
export default function SignInAndSignUpPage() {
    return (
        <div className="SignInUp">
           {/* <h3>test 3</h3> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
