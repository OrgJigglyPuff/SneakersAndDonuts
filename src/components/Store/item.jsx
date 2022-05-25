import React from 'react';
import axios from 'axios';

function Donut({type, price, image, description, id, reffer}) {
    //document.getElementById("id").style.border = "thick solid #0000FF";
    let refference = reffer + ""
    let priceOf = price;
    let img = image;
    let cartId = id;
    //console.log(refference)
    function addToCart() {
        console.log(id)
        let typeOf = document.getElementById(`${refference}`).innerText
        let price = document.getElementById(`${priceOf}`).innerText
        let obj ={'_id': cartId.slice(1,cartId.length -1), 'type': typeOf, 'price' : price, 'image' : img }
        //  console.log(obj)
        axios.post('./store/add', obj)
        .then(res => console.log(res))

    }
    return (
    <div id="item">
        <div>
          <img src={image}></img>
        </div>
        <div id="content">
        <h3 id={refference}>{type}</h3>
        <h3>{description}</h3>
        <p id={priceOf}>{price}</p>
        <button id="button" onClick={() => addToCart()}>Add to cart</button>
        </div>
    </div>
    )
}
export default Donut;