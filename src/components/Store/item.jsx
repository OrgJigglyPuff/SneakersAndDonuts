import React from 'react';
import './items.css';
import axios from 'axios';

function Donut({type, price, image, description, id, reffer}) {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    let refference = reffer + ""
    let priceOf = price;
    console.log(refference)
    function addToCart() {
        let typeOf = document.getElementById(`${refference}`).innerText
        let price = document.getElementById(`${priceOf}`).innerText
        let obj ={'_id': id, 'type': typeOf, 'price' : price }
        //  console.log(obj)
        axios.post('./store/add', obj)
        .then(res => console.log(res))

    }


    return(
     <div id= 'item' >
         <img src={image}></img>
         <h1 id = {refference} >{type}</h1>
         <h1>{description}</h1>
         <div id = 'priceAndBuy'>
            <h1 id = {priceOf}>{price}</h1>
            <button onClick={() => addToCart()}>Add to cart</button>
         </div>
     </div>   
    )
    
}


export default Donut;

//{type: 'Jelly', price: '$3.10', image_link: 'https://en.wikipedia.org/wiki/Jelly_doughnut#/media/File:Jelly-Donut.jpg', description: '