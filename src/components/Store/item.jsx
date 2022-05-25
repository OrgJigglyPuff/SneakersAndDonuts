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
    return (
    <div className="flex flex-col items-center border-solid border border-gray-300 m-4" id="item">
        <div>
          <img className="w-64" src={image}></img>
        </div>
        <div className="w-full flex flex-col items-center font-sans">
          <h3 className="text-2xl font-semibold" id={refference}>{type}</h3>
          <h3 className="italic">{description}</h3>
          <p className="mt-8 mb-2 text-xl font-bold" id={priceOf}>{price}</p>
          <button className="px-4 py-2 font-semibold text-sm bg-violet-500 text-white rounded-full shadow-sm mb-8" id="button" onClick={() => addToCart()}>Add to cart</button>
        </div>
    </div>
    )
}
export default Donut;