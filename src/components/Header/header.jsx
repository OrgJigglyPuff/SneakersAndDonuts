import React from 'react';
import { Link, Navigate} from "react-router-dom";

function Header({user, id}) {
    return (
        <div id= 'header' >
            <h1>Welcome {user}</h1>
            <h2> Sneakers&Donuts </h2>
            <Link to={"cart"} >
            <div id = 'cart'>
            <img src = "http://cs.sixtrillion.com/jigglypuff/cart.svg" alt="shopping_cart" id="icon"></img>
            </div>
            </Link>
        </div>
    )
}

export default Header;