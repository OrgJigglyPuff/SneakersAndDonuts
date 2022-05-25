import React, { useState, useEffect } from 'react';
import { Link, Navigate} from "react-router-dom";
import axios from 'axios';


export default function Checkout({id}){

    const [display, setDisplay] = useState(false)

    function done() {
        axios.post('./store/checkout', { _id: id})
        .then(res => console.log(res))
    }

return(
<div>
         <input id ='FirstName' placeholder = 'Firstname' type="text" />
         <input id ='Lastname' placeholder = 'Lastname' type="text" />
         <input id = "Address1" placeholder = 'Address1' type="text" />
         <input id = "Address2" placeholder = 'Address2' type="text" />
         <div id = 'cityStateZip'>
            <input id = "City" placeholder = 'City' type="text" />
            <input id = "State" placeholder = 'State' type="text" />
            <input id = "Zip" placeholder = 'Zip' type="text" />
        </div>
        {/* <Link to={"confirmation"} > */}
            <button onClick = {() => done()}>Pay With Paypal</button>
            <button>Pay With Stripe</button>
        {/* </Link> */}
</div>
)

};