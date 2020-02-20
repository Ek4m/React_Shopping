import "@babel/polyfill";


import React, { useContext } from 'react'
import '../../Header.css'
import {FaShoppingBag} from 'react-icons/fa'
import {ShopContext} from '../../../../ShopContext'
const Cart = () => {
    const value = useContext(ShopContext);
    let myClass;
    if(value.bagAnm){
        myClass = "Cart anime"
    }else{
        myClass = "Cart"
    }
    return (
              <FaShoppingBag
              onClick={value.bagClicked}
              className={myClass} />
    )
}

export default Cart
