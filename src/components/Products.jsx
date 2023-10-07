import React, { Component } from "react";
import styled from "./Products.module.css";
import Product from "./Product";
import icon from "../icon/icons8-basket-96.png";
import axios from "axios";
import BasketProducts from "./BasketProducts";
export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      productGetData: [],
      basket: [],
      showbasket:false,
    };
  }

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ productGetData: response.data.slice(0,5) });
    });
  };

  basketHandler = () => {
    this.setState(prev=>({showbasket:!prev.showbasket}))
    
  };

  Addtocard=(id,event)=>{

    if(!this.state.basket.length){
          const result=this.state.productGetData.filter(item=>{
            return item.id==id
          })
          this.setState(prev=>({
            basket:[...prev.basket,...result]
          }))
      }else{
      const res= this.state.basket.some(itemBasket=>{

        if(itemBasket.id !== id){
         return true
         }
          return false
         
        //else if(itemBasket.id == id){
          
        //   this.setState(prev=>({
        //     basket:[...prev.basket],counter:2
        //   }))
        //   console.log(this.state.basket);
        // }
      })     
      console.log(res);
      if(res){
        const result=this.state.productGetData.filter(item=>{
          return item.id == id
        })
        this.setState(prev=>({
          basket:[...prev.basket,...result]
        }))
      } else{
        console.log('hiiiii');
      }
    }
  }
  dele=(id)=>{
   const result= this.state.basket.filter(item=>{
      return item.id !== id
    })
    this.setState({
      basket:result
    })
  }

  render() {
    return (
      <>
        <div className={styled.container}>
          <div className={styled.header}>
            <h1>Shopping Card</h1>
            <img src={icon} alt="" onClick={this.basketHandler} />
          </div>
          {
            !this.state.showbasket ? 
          <div className={styled.allproducts}>
            {this.state.productGetData.map((item) => {
              return <Product key={item.id} {...item} func={this.Addtocard} />;
            })}
          </div>
          :
          <div className={styled.baskets}>
            <BasketProducts funcs={this.dele} name={this.state.basket} />  
          </div>
          }   

        </div>
      </>
    );
  }
}
