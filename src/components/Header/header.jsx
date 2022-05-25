import React from 'react';
import { Link, Navigate} from "react-router-dom";

function Header({user, id}) {
  return (
    <header>
      <nav className="flex justify-around items-center py-6">
        <h1>Welcome {user}!</h1>
        <img src="http://cs.sixtrillion.com/jigglypuff/sneakers+donuts.png" alt="Sneakers &amp; Donuts logo" class="w-18"></img>
        <Link to={"cart"} >
        <div id="cart">
          <img src="http://cs.sixtrillion.com/jigglypuff/cart.svg" alt="shopping_cart" class="w-8"></img>
        </div>
        </Link>
      </nav>
      <div className="container mx-auto px-4 my-10">
        <img className="w-full" src="http://cs.sixtrillion.com/jigglypuff/hero.jpg" alt="sneakers and donuts"></img>
      </div>
    </header>
  )
}

export default Header;