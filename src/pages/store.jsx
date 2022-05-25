import React, { useState, useEffect } from 'react'
import Donut from '../components/Store/item'
//import './store.css'
import axios from 'axios'

export default function Store({user, id}) {
let array = [];
let data;
let count = 0;
const [display, setDisplay] = useState('false')
const [outputArray, setOutput] = useState([])
useEffect(() => {
        axios.get('/store')
        .then(res => data = res.data)
        //.then(()=> console.log(data))
        .then(()=> { array = data[0].concat(data[1]); return })
        // .then(res => console.log(array))
        .then( () => {
            array.forEach(el => {
                //console.log(el);
                count++;
                outputArray.push(<Donut type={el.type} price={el.price} image={el.image_link} description={el.description} id = {id} reffer = {count}/>)
            })
        })
        .then(() => setDisplay(true))
    }, [])

    if (display=== true) {console.log(outputArray) ;return (
        <div id = 'storediv'>
        <div className="ItemContainer">
           {outputArray}
        </div>
        </div>
    ) }
}