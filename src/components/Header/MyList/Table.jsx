import "@babel/polyfill";


import React, { useContext } from 'react'
import '../Header.css'
import {ShopContext} from '../../../ShopContext'

const Table = (props) => {

const value = useContext(ShopContext)
let resPrice = 0 
value.products.forEach(elem => {
    resPrice +=(+elem[2]) * (+elem[1]);
})
    return (
        <div className="Table">
            <p>No. of items :  {value.products.length}</p>
            <p>Sub Total : ${+resPrice.toFixed(2)}</p>
        </div>
    )
}

export default Table
