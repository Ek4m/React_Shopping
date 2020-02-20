import "@babel/polyfill";


import React, { useContext } from 'react'
import '../Header.css'
import {FaSearch} from 'react-icons/fa'
// import {ClickedContext} from '../ClickedContext'
import {InputContext} from '../InputContext'


const SearchBar = (props) => {
const inputCont = useContext(InputContext)
            return (
        <div className={props.name}>
            <input type="text" 
            onChange={(e) =>inputCont.changeInput(e)}
            className="search-bar"
            placeholder="Search for Products" />
            <button className="search-btn"><FaSearch className="search-icon" /></button>
        </div>
    )
}

export default React.memo(SearchBar)
