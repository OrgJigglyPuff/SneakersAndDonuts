import React from 'react';
import axios from 'axios';

function Donut({type, price, image, description, id, reffer}) {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    let refference = reffer + ""
    let priceOf = price;
    let img = image;
    //console.log(refference)
    function addToCart() {
        let typeOf = document.getElementById(`${refference}`).innerText
        let price = document.getElementById(`${priceOf}`).innerText
        let obj ={'_id': id, 'type': typeOf, 'price' : price, 'image' : img }
        //  console.log(obj)
        axios.post('./store/add', obj)
        .then(res => console.log(res))

    }


    return(
    //  <div id= 'item' class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" >
    //      <img src={image} ></img>
    //      <h1 id = {refference} >{type}</h1>
    //      <h1>{description}</h1>
    //      <div id = 'priceAndBuy'>
    //         <h1 id = {priceOf}>{price}</h1>
    //         <button onClick={() => addToCart()}>Add to cart</button>
    //      </div>
    //  </div>
    <div id= 'item'>

        <div class="w-full h-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src={image}class="w-full h-full object-center object-cover lg:w-full lg:h-full"></img>
        </div>
        <div id = 'content'>
        <h3 id = {refference} class="mt-4 text-sm text-gray-700">{type}</h3>
        <h3 class="mt-4 text-sm text-gray-700">{description}</h3>
        <p id = {priceOf} class="mt-1 text-lg font-medium text-gray-900">{price}</p>
        <button id = 'button' onClick={() => addToCart()}>Add to cart</button>
        </div>
    </div>
    )

}


export default Donut;

//{type: 'Jelly', price: '$3.10', image_link: 'https://en.wikipedia.org/wiki/Jelly_doughnut#/media/File:Jelly-Donut.jpg', description: '