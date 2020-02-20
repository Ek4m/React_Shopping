import "@babel/polyfill";


import React, { useContext, useEffect, useState, Fragment } from 'react'
import axios from '../../axios'
import './Main.css'
import Element from './Element/Element'
import Spinner from '../../Spinner'
import {InputContext} from '../Header/InputContext'
import BackDrop from '../../BackDrop'
const Main =() => {
    const value = useContext(InputContext);
const [products,setProducts] = useState([]);
const [isImageClicked,setClicked] = useState(false);
const [source,setSource] = useState('');

this.imageClickedHandler = (source) => { 
        setSource(source);
    setClicked(!isImageClicked)    
}

useEffect(() => {    
    let obj = []
    let resObj = []
axios.get('/products.json')
.then(result => {
 obj = Object.entries(result.data)
obj.forEach(elem => {
if(elem[0].toUpperCase().includes(value.inputValue.toUpperCase())){
    resObj.push([...elem])
}
})
setProducts(resObj)
})
},[value.inputValue])

let res;
if(value.inputValue === ''){
    res = <Spinner />
}
if(products.length > 0){
res = products.map(elem => {
    return <Element 
    key={elem[0]}
    clicked={() => {this.imageClickedHandler(elem[0])}}
    src={require(`../../images/${elem[0]}.png`)}
    name={elem[0]}
    price={elem[1]}
    />
})
}
else if(products.length === 0 && value.inputValue !== ''){
    res = <Fragment>
        <h2 style={{fontWeight:'lighter'}}>No product matched : /</h2>
        <img alt="noproduct"
    className="noproduct"
    src={require('../../images/noproduct.png')}/>
    </Fragment>
}

if(isImageClicked){
    document.body.style.overflow = 'hidden'
}else{
    document.body.style.overflow = ''

}
        return (              
                <div className="Main">
                {isImageClicked ? 
                <Fragment>
                    <BackDrop clicked={this.imageClickedHandler} />
                 <div    className="backdrop_image">
                 <img src={require(`../../images/${source}.png`)}
                 alt="name"/>
                 </div>
                </Fragment>
                : null}
               {res}
            </div>
        )
}

export default Main
