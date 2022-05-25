import React from "react";
//import './cart.css';

function OrderSummary({image, price, product}) {
  return (
    <div className="flex col-span-2 border-solid border border-neutral-900 items-center justify-around">
      <img src={image} alt="item"></img>
      <span>{product}</span>
      <span>${price}</span>
      <span className="font-bold">X</span>
    </div>
  );
}
export default OrderSummary;