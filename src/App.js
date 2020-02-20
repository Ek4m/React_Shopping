import "@babel/polyfill";



import React, { PureComponent } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {ClickedContext} from './components/Header/ClickedContext'
import { InputContext } from './components/Header/InputContext';
import {ShopContext} from './ShopContext'
import Main from './components/Main/Main';
class App extends PureComponent {
  state = {
    isOtherSearchClicked:false,
    width:window.innerWidth,
    inputValue:'',
    myProducts:[],
    isBagClicked:false,
    bagAnm:false
  }


  setInput = (e) => {
this.setState({inputValue:e.target.value})
  }

  componentDidMount(){
  window.addEventListener('resize', () => {
    this.setState({width:window.innerWidth})
  if(this.state.isOtherSearchClicked &&this.state.width > 650){
    this.setState({isOtherSearchClicked:false})
  } 
  })
}


deleteBag = () => {
  this.setState({isBagClicked:false})
}

deleteElem = (name) => {
  const arr = [...this.state.myProducts]
const index = arr.findIndex(elem => elem[0] === name)
arr.splice(index,1)
this.setState({myProducts:arr})
}

addProduct = (name,price,quantity) => {
 if(quantity !== 0){
  let c = 0
  this.state.myProducts.forEach(elem => {
    if(elem[0] === name){
      c++;
    }
  })
  if(c === 0){
    let obj = []
    obj[0] = name;
    obj[1] = quantity;
    obj[2] = price;
  let arr = [...this.state.myProducts]
  arr.push(obj);
  this.setState({myProducts:arr})
}else{
  let arr = [...this.state.myProducts]
  const index = arr.findIndex((elem) => elem[0] === name)
const  myObj = [...arr[index]]
myObj[1] += quantity;
arr[index] = myObj;
this.setState({myProducts:arr})
}
this.setState({bagAnm:true})
setTimeout(()=> {
  this.setState({bagAnm:false})
},300)
 }else{
   alert('Add some kilos :)')
 }
  }


bagClickedHandler = () => {
this.setState({isBagClicked:!this.state.isBagClicked})
}

setOtherSearchClicked = () => {
  this.setState({
    isOtherSearchClicked:!this.state.isOtherSearchClicked
  })
}

  render() {
    return (
  <ShopContext.Provider value={{
    bagAnm:this.state.bagAnm,
    products:this.state.myProducts,
    add:this.addProduct,
    deleteBag:this.deleteBag,
    bagClicked:this.bagClickedHandler,
  clickElem:this.deleteElem,
  isBagClicked:this.state.isBagClicked}}>
    <InputContext.Provider value={{inputValue:this.state.inputValue, changeInput:this.setInput}}>
    <ClickedContext.Provider value={{isClicked:this.state.isOtherSearchClicked,
    width:this.state.width,setClicked:this.setOtherSearchClicked}}>
        <div className="App">
     <Header />
   <div onClick={this.deleteBag}>
   <div className="entrance">
     <h1>Shop Now</h1>
    <div></div>
     </div>
     <Main/>
      </div>
   </div>
    </ClickedContext.Provider>
  </InputContext.Provider>
  </ShopContext.Provider>
    );
  }
}

export default App;
