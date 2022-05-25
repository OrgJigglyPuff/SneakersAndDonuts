import React from "react";
import { Link, Navigate} from "react-router-dom";

function OrderSummaryDetails({cost, quantity}) {
  return (
    <div className="col-span-1 border-dotted border border-green-600">These are the details
    <span>{quantity} number of items in your cart</span>
    <span>${cost}</span>
    <Link to={"checkout"} >
    <button>Proceed with payment</button>
    </Link>
    </div>
  );
}
export default OrderSummaryDetails;