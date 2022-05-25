import React, { useState, useEffect } from 'react';
import OrderSummary from '../components/Cart/OrderSummary';
import OrderSummaryDetails from '../components/Cart/OrderSummaryDetails';
import axios from 'axios';

export default function Cart ({user, id}) {

  const [display, setDisplay] = useState(false)
  const [outputArray, setOutput] = useState([])
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  let array;
  let info;



  useEffect(() => {
    axios.post('/store/get', {_id: id.slice(1,id.length -1)})
    .then(res => { array = res.data.items; info = res.data; return} )
    // .then(res => array = res.data.items)
    .then(()=> array.forEach(el => {
      //console.log(el);
      outputArray.push(<OrderSummary image={el.image} price={el.price} product={el.product} />)
      }))
    .then(() => {
        setPrice(info.total_price);
        setQuantity(info.total_quantity);
      return
    })
  .then(() => setDisplay(true))

  }, [])

  if (display=== true) return (
    <main className="container mx-auto min-h-screen">
      <h1 className="mb-6">Order Summary</h1>
      {/* <div className="container mx-auto grid gap-4 grid-cols-3 grid-rows-1"> */}
      <div class="flex justify-around">
        <div className="w-7/12">
            {outputArray}
        </div>
        <div className="h-screen sticky top-0">
          <OrderSummaryDetails cost = {price} quantity = {quantity}/>
        </div>
      </div>
    </main>
  );
}