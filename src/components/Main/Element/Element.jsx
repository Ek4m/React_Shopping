import "@babel/polyfill";


import React, { useContext, useState } from 'react'
import '../Main.css'
import {FiMinusCircle,FiPlusCircle} from 'react-icons/fi'
import {ShopContext} from '../../../ShopContext'
const Element = (props) => {
    const value = useContext(ShopContext); 
    const [quantity,setQuantity] = useState(1)

    this.quantityIncrease = () => {
setQuantity(+((quantity + 1).toFixed(1)))
console.log(typeof quantity)

    }

    this.quantityDecrease = () => {
        if(quantity > 1){
        setQuantity(+((quantity - 1).toFixed(1)))
            }
            console.log(typeof quantity)

        }

    return (
        <div className="Element">
        <img src={props.src} alt={props.name} onClick={props.clicked} />
    <h3>{props.name} - 1 Kg</h3>
<h2>${props.price}</h2>
<div className="calc">
<FiMinusCircle className="plusminus" onClick={this.quantityDecrease} /> 
<input type="number"  step="0.01" value={+quantity} min="0" max="100" onChange={(e) => {
       setQuantity(Number(e.target.value.trim()))
}} />
<FiPlusCircle  className="plusminus"  onClick={this.quantityIncrease}/>
</div>
<button className="AddtoCart" 
onClick={() => value.add(props.name,props.price,quantity)}
>Add to cart</button>
        </div>
    )
}

export default Element
