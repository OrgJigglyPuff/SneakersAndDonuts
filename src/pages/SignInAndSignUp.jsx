import React from 'react'
import SignInForm from '../components/SignIn/sign-in.jsx'
import SignUpForm from '../components/SignIn/sign-up.jsx'

export default function SignInAndSignUpPage({user, updateUser, cartId, updateCartId, userId, updateUserId}) {
  return (
    <div className="main w-max m-auto mt-10">
      <SignInForm user = {user} updateUser = {updateUser} cartId ={cartId} updateCartId = {updateCartId} userId ={userId} updateUserId = {updateUserId} />
      <SignUpForm user = {user} updateUser = {updateUser} cartId ={cartId} updateCartId = {updateCartId} userId ={userId} updateUserId = {updateUserId} />
    </div>
  )
}
