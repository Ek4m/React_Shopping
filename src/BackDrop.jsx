import React from 'react'
import './App.css'
const BackDrop = (props) => {
    return (
        <div className="Backdrop" onClick={props.clicked}>
        </div>
    )
}

export default BackDrop
