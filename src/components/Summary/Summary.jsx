import "@babel/polyfill";


import React, {useContext} from 'react'
import './Summary.css'
import {ShopContext} from '../../ShopContext'
import SummaryElement from './SummaryElement'
const Summary = () => {
    const value = useContext(ShopContext)
    let res; 

   
    if(value.products.length !== 0){
     res = value.products.map(elem => {
            return <SummaryElement key={elem[0]}
            name={elem[0]}
            totalPrice={elem[2]}
            />
            })
    }else{
        res = <img src={require('../../images/noadded.png')} 
        className="no-product_added"
        alt="img" />
    }

    let resPrice = 0 
    value.products.forEach(elem => {
        resPrice +=elem[2] * elem[1];
    })   


    return (
        <div className="Summary">
           <div className="SummaryTable">
           {res}
           </div>
           <hr/>
    <h3>{resPrice.toFixed(2)}$</h3>
        </div>
    )
}

export default Summary
