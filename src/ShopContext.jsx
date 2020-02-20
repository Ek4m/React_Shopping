import React from 'react'
const ShopContext = React.createContext()
const ShopProvider = (props) => {
    return (
        <ShopContext.Provider>
           {props.children} 
        </ShopContext.Provider>
    )
}

export {ShopContext,ShopProvider}
