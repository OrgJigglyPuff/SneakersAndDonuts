import React from "react";
//import './cart.css';

export default function PreOrders({num, price, orderNum}) {
  return (
    <div className="flex col-span-2 border-solid border border-neutral-900 items-center justify-around">
      <span>Order Number: {orderNum}</span>
      <span>Number of items: {num}</span>
      <span>Total cost was: {price}</span>
      
    </div>
  );
}