import React, { useState, useEffect } from 'react';
import OrderSummary from '../components/Cart/OrderSummary';
import OrderSummaryDetails from '../components/Cart/OrderSummaryDetails';
import axios from 'axios';

export default function Cart () {
  const [outputArray, setOutput] = useState([]);
  useEffect(() => {
    axios.post('/store/get', {_id: '628cf0e6f91da7d772f6d858'})
    .then(res => console.log(res))
    //.then(()=> console.log(data))
    // .then(()=> { array = data[0].concat(data[1]); return })
    // // .then(res => console.log(array))
    // .then( () => {
    //     array.forEach(el => {
    //         console.log(el);
    //         count++;
    //         outputArray.push(<Donut type={el.type} price={el.price} image={el.image_link} description={el.description} id = {id} reffer = {count}/>)
    //     })
    // })
  }, [])

  return (
    <main className="container mx-auto min-h-screen">
      <h1 className="mb-6">Order Summary</h1>
      <div className="container mx-auto grid gap-4 grid-cols-3 grid-rows-1">
        <OrderSummary/>
        <OrderSummaryDetails/>
      </div>
    </main>
  );
}