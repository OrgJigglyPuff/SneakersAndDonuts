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
            document.getElementById('error').innerText = "Credentials not accepted"
        })
         //.then(res=> console.log(res))
        if (user != '') return (<Navigate to={"store"}/>)

    }

    return (
    <div class="main w-max m-auto mt-10">
      <div class="login">
      <h2 class="text-2xl mb-6">Login</h2>
      <div class="username flex border rounded text-gray-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <input class="outline-none px-2 h-full py-2 text-lg" type="text" placeholder="username" id="user" />
      </div>

      <div class="password flex border rounded text-gray-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
        <input class="outline-none px-2 h-full py-2 text-lg" type="password" placeholder="password" id="pass"/>
      </div>

      <div class="show_info text-sm mb-4 w-max text-red-400" id="error"></div>

      <div class="submit border rounded mb-4 bg-violet-500 text-white cursor-pointer">
        <div class="wrapper flex w-max mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>
          <input class="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Login" onClick={() => signIn()} />
        </div>
      </div>
    </div>
  </div>
    )
}


export default SignIn;
