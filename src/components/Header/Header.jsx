import "@babel/polyfill";


import React from 'react'
import './Header.css'
import SearchBar from './SearchBar/SearchBar'
import MyList from './MyList/MyList'
import { FaArrowLeft } from 'react-icons/fa'
import {ClickedContext} from './ClickedContext'
import {ShopContext} from '../../ShopContext'
import Summary from '../Summary/Summary'
class Header extends React.Component {
static contextType = ClickedContext;

    render(){
        let arrow = {}
        let cls = {}
        let clsName = ''
        if(this.context.isClicked && this.context.width < 650){
            clsName = 'disp'
            cls = {display:'none'}
            }else{
                arrow = {display:'none'}
                clsName = 'SearchBar'
            }
    return (
        <header className="header">
        <img className="icon" src={require('../../images/icon.png')} style={cls}  alt="icon"/>
        <FaArrowLeft style={{cursor:"pointer",...arrow}} onClick={this.context.setClicked}/>
     <SearchBar  name={clsName}/>
    <MyList style={cls} />
<ShopContext.Consumer>
    {(context) => {
        if(context.isBagClicked){
            return <Summary />
        }
    }}
</ShopContext.Consumer>
        </header>
    )
 }
}

export default Header
