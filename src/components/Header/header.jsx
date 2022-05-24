import React from 'react';
//import './footer.css'
function Header({user, id}) {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    return(
     <div id= 'header' >
         <h1> Welcome {user}</h1>
         <div id = 'cart'>
        <img src = './shoppingCart.png' width="15px" height='15px'></img>
         </div>
     </div>   
    )
    
}


export default Header;