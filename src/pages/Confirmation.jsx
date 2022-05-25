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

      if (display=== true) return(
<div>
         
        <Link to={'/store'} >
            <h1> Thank you for you're purchase! Click here to go back to the main page</h1>
        </Link>
        {outputArray}
</div>
)

};