import "@babel/polyfill";


import React, { Component } from 'react'
import Cart from './Cart/Cart'
import Table from './Table'
import '../Header.css'
import {FaSearch} from 'react-icons/fa'
import {ClickedContext} from '../ClickedContext'
import {ShopContext} from '../../../ShopContext'
class MyList extends Component {
    static contextType = ClickedContext
    
    render() {

        return (
            <div className="MyList" style={this.props.style} >
                     <FaSearch className="forActivateSearch" 
                     style={{marginRight:'15px'}}
                     onClick={this.context.setClicked}/>
                <Table />
<Cart />  
     <ShopContext.Consumer>
         {(context) => {
             if(context.products.length > 0){
              return   <div 
              onClick={context.bagClicked}
              className="redNumberShower"><p>{context.products.length}</p></div>        
             }    else{
                 return null;
             }
    }}
         </ShopContext.Consumer>  
            </div>
        )
    }
}

export default MyList
