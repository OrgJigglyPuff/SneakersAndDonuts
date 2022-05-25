import React from 'react'
import SignInForm from '../components/SignIn/sign-in.jsx'
import SignUpForm from '../components/SignIn/sign-up.jsx'

export default function SignInAndSignUpPage({user, updateUser, cartId, updateCartId, userId, updateUserId}) {
    return (

            <div className="SignInUp">
            {/* <h3>test 3</h3> */}
            <SignInForm user = {user} updateUser = {updateUser} cartId ={cartId} updateCartId = {updateCartId} userId ={userId} updateUserId = {updateUserId} />
            <h1>Don't have an account?</h1>
            <SignUpForm user = {user} updateUser = {updateUser} cartId ={cartId} updateCartId = {updateCartId} userId ={userId} updateUserId = {updateUserId} />
        </div>

    )
}
