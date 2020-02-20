import "@babel/polyfill";


import React from 'react'
const ClickedContext = React.createContext()
const ClickedProvider = (props) => {
    
    return (
        <ClickedContext.Provider>
           {props.children} 
        </ClickedContext.Provider>
    )
}

export {ClickedContext,ClickedProvider}
