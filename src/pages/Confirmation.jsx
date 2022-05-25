import React, { useState, useEffect } from 'react';
import { Link, Navigate} from "react-router-dom";
import PreOrders from '../components/pastOrders/preOrders';
import axios from 'axios';

export default function Confirmation({id}){

    const [display, setDisplay] = useState(false);
    const [outputArray, setOutput] = useState([]);
    let data;

    useEffect(() => {
        console.log(id)
        axios.post('/store/orders', {user_id: id})
        .then(res => {console.log(res); data = res.data; return})
        .then(()=> data.forEach(el => {
          //console.log(el);
          outputArray.push(<PreOrders orderNum = {el.order_id} num={el.number_of_items} price={el.total_cost}  />)
          }))
        // .then(() => {
        //     setPrice(info.total_price);
        //     setQuantity(info.total_quantity);
        //   return
        // })
      .then(() => setDisplay(true))

      }, [])

      if (display === true) return (
      <div className="container mx-auto">
        <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-violet-500 text-center italic">Thank you for your purchase! Your sneakers and donuts will be on a truck and on their way to you soon!</h1>
        <video controls autoPlay loop muted className="mx-auto my-8">
          <source src="http://cs.sixtrillion.com/jigglypuff/donut-jeep.mp4" type="video/mp4"></source>
        </video>
        <Link to={'/store'} >
        Click here to return to the store.
        </Link>
        <h1 className="font-medium leading-tight text-xl mt-0 mb-2 text-violet-500 text-center italic">Order History</h1>
        {outputArray}
      </div>
)

};