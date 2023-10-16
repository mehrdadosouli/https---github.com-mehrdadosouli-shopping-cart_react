import React, { Component } from 'react'
import styled from "./Products.module.css"
import Product from './Product'
import icon from "../icon/icons8-basket-96.png"
import axios from 'axios'
export default class Products extends Component {
  constructor(){
    super()
    this.state={
      product:[],
      basket:[],
      resultadd:[],
      res:[]
    }
  }
  componentDidMount=()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        this.setState({product: response.data})
    })
    
  }
  Addtocard=(event)=>{
    this.state.product.length ? this.state.product.find(item=>{
      if(item.id == event.target.id){
        return this.setState({res:item})
      }
    }) : "" 
      
      if(this.state.resultadd.length !== 0){
        console.log(this.state.resultadd);
        this.state.resultadd.find(item=>{
         if(item.id !== this.state.res.id){
         return this.setState(prevstate=>({
             resultadd:[...prevstate.resultadd , this.state.res]
          }))
         }else{
           return false
         }  
       })

      }else{

        this.setState(prevstate=>({
          resultadd:[...prevstate.resultadd , this.state.res]
       }))
    }  

  }
  
  render() {
    return (
      <>
      <div className={styled.container}>
        <div className={styled.header}>
          <h1>Shopping Card</h1>
          <img src={icon} alt="" />
        </div>
        <div className={styled.allproducts}>
          {
            this.state.product.map(item=>{
              return <Product key={item.id} {...item} func={this.Addtocard}/>
            })
          }
       </div>
      </div>
      </>
    )
  }
}
