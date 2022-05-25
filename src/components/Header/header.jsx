import React from 'react';
function Header({user, id}) {
    return (
     <header id= 'header' >
         <h1> Welcome {user}</h1>
         <div id='cart'>
            <img src = './shoppingCart.png' width="15px" height='15px'></img>
         </div>
     </header>   
    )
}

export default Header;