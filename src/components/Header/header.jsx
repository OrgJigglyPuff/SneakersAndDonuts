import React from 'react';
import './header.css'
import { Link, Navigate} from "react-router-dom";

function Header({user, id}) {
    return (
        <div id= 'header' >
            <h1>Welcome {user}</h1>
            <h2> Sneakers&Donuts </h2>
            <Link to={"cart"} >
            <div id = 'cart'>
            <img src = 'https://cdn-icons-png.flaticon.com/512/263/263142.png' alt="shopping_cart" id = 'icon' ></img>
            </div>
            </Link>
        </div>
    )
}

export default Header;