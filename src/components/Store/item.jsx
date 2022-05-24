import React from 'react';
import './items.css'
function Donut({type, price, image, description}) {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    return(
     <div id= 'item' >
         <img src={image}></img>
         <h1>{type}</h1>
         <h1>{description}</h1>
         <div id = 'priceAndBuy'>
            <h1>{price}</h1>
            <button>Add to cart</button>
         </div>
     </div>   
    )
    
}


export default Donut;

//{type: 'Jelly', price: '$3.10', image_link: 'https://en.wikipedia.org/wiki/Jelly_doughnut#/media/File:Jelly-Donut.jpg', description: '