import "@babel/polyfill";


import React, { useContext } from 'react'
import './Summary.css'
import {IoMdClose} from 'react-icons/io'
import {ShopContext} from '../../ShopContext'
const SummaryElement = (props) => {
    const value = useContext(ShopContext);
    return (
        <div className="SummaryElement">
<p>{props.name}</p>
    <p>{props.totalPrice}</p>
<IoMdClose className="sumElemDelete" 
onClick={() => value.clickElem(props.name)}/>
        </div>
    )
}

export default SummaryElement
