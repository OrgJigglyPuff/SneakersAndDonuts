import React from "react";
import './cart.css';

function OrderSummary() {
  return (
    <div className="flex col-span-2 border-solid border border-neutral-900 items-center justify-around">
      <img src="https://via.placeholder.com/100x100" alt="item"></img>
      <span>This is the item name</span>
      <span>$34.99</span>
      <span>X</span>
    </div>
  );
}
export default OrderSummary;