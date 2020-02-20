import "@babel/polyfill";


import React from 'react'
const InputContext = React.createContext()
const Provider = (props) => {
    return (
        <InputContext.Provider>
            {props.children}
        </InputContext.Provider>
    )
}

export  {InputContext,Provider}
