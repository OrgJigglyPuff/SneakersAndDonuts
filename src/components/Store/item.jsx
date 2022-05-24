import React from 'react';
import './items.css'
function Item() {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    return(
     <div id= 'item' >
         <img></img>
         <h1>item</h1>
         <h1>description</h1>
         <h1>price</h1>
         <button>Add to cart</button>
     </div>   
    )
    
}


export default Item;