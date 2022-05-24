import React from 'react'
import Item from '../components/Store/item'
import './store.css'
export default function Store({user}) {

    let array = [1,2,3,4,5,6,7,]
    let outputArray = []
    for (let i = 0; i < array.length; i++)
    {
        outputArray.push(<Item />)
    }




    return (
        <div id = 'storediv'>
        <h1>{user}</h1>
        <div className="ItemContainer">
           {/* <h3>test 3</h3> */}
            {outputArray}
        </div>
        </div>
    )
}